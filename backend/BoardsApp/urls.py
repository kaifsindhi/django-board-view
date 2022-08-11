from django.urls import re_path
from . import views

urlpatterns = [
    re_path(r'^board/$', views.BoardAPI),
    re_path(r'^board/([0-9]+)$', views.BoardAPI)
]
