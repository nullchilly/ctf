from django.db import models
from django.utils import timezone

class Github(models.Model):
    path = models.URLField(unique=True)
    readme = models.TextField(default='')
    created_at = models.DateTimeField(default=timezone.now)
    def __str__(self):
        return self.path

class ReqLog(models.Model):
    ip = models.GenericIPAddressField()
    request_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.ip