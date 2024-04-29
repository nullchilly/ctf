from django.contrib import admin
from django.urls import path
from api.api import api

urlpatterns = [
    path('api/', api.urls),
    path('admin/', admin.site.urls),
]