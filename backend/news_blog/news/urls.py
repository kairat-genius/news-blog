
from django.urls import path
from .views import *

urlpatterns = [
    path('', ListNews.as_view(), name='Главная')
]