from django.urls import re_path
from . import views

urlpatterns = [
    re_path(r'^board/$', views.BoardAPI),
    re_path(r'^board/([0-9]+)$', views.BoardAPI),

    re_path(r'^board/([0-9]+)/list/$', views.ListAPI),
    re_path(r'^board/([0-9]+)/list/([0-9]+)$', views.ListAPI),

    re_path(r'^board/([0-9]+)/list/([0-9]+)/card/$', views.CardAPI),
    re_path(r'^board/([0-9]+)/list/([0-9]+)/card/([0-9]+)$', views.CardAPI),
]
