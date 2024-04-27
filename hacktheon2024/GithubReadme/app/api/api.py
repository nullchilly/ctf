from ninja import NinjaAPI, Schema
from ipware import get_client_ip
from .models import *
from django.utils import timezone
from django.contrib.admin.views.decorators import staff_member_required
from django.core.validators import URLValidator
from datetime import timedelta
from asgiref.sync import sync_to_async
from enum import Enum
from pydantic import BaseModel
import requests, os

api = NinjaAPI(
    docs_decorator=staff_member_required
)

class Error(Schema):
    msg: str = 'Error'

class BranchName(str, Enum):
    master= 'master'
    main= 'main'

class Path(Schema):
    path: str = '/git/git'
    branch_name: BranchName
    class Config:
        use_enum_values = True

@api.post("/view", response={200: str, 400: Error})
def view(request, path: Path):
    try:
        ip = get_client_ip(request)[0]
        if ReqLog.objects.filter(ip=ip, request_at__gt=timezone.now() - timedelta(seconds=10)).exists():
            return 400, {'msg': f"so Fast.. - {ip}"}
        else:
            ReqLog(ip=ip).save()
        github = Github.objects.filter(path=path)
        if github.exists():
            return github.first().readme
        url = f"https://raw.githubusercontent.com{path.path}/{path.branch_name}/README.md"
        URLValidator()(url)
        response = requests.get(url)
        if response.status_code != 200:
            return 400, {}
        readme = response.text
        Github(
            path=path,
            readme=readme
        ).save()
        return readme
    except Exception as e:
        return 400, {}

@api.get("/admin", response={200: dict, 401: Error})
def admin(request):
    client_ip, is_routable = get_client_ip(request)
    if not is_routable :
        return {'msg':os.environ.get('FLAG')}
    else:
        return 401, {'msg': 'ACCESS DENIED'}
