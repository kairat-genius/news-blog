
from django.urls import path
from .views import *

urlpatterns = [
    path('', NewsList.as_view(), name='Главная'),
    path('category/', CategoryList.as_view()),
    path('category/<slug:urls>/', CategoryDetail.as_view()),
    path('details/<slug:urls>/', NewsDetail.as_view()),
    #admin panel
    path('admin_panel/category', CategoryAddAdmin.as_view(), name='category_add'),
    path('admin_panel/category/<slug:urls>/', CategoryDetailAdmin.as_view(), name='detail_create'),
    path('admin_panel/news', NewsAddAdmin.as_view(), name='news_add_admin'),
    path('admin_panel/news/<slug:urls>/', NewsDetailAdmin.as_view(), name='news_detail_admin')

]