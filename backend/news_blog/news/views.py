from rest_framework import generics
from rest_framework.response import Response

from .models import *
from .serializers import NewsSerializer, CategorySerializer, NewsDetailSerializer, NewsAddAdminSer

class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
#
class NewsList(generics.ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

class NewsDetail(generics.RetrieveAPIView):
    queryset = News.objects.all()
    serializer_class = NewsDetailSerializer
    lookup_field = 'urls'

"""Admin panel"""
class CategoryAddAdmin(generics.CreateAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class CategoryDetailAdmin(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()
    lookup_field = 'urls'


class NewsAddAdmin(generics.CreateAPIView):
    serializer_class = NewsAddAdminSer
    queryset = News.objects.all()


class NewsDetailAdmin(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = NewsAddAdminSer
    queryset = News.objects.all()
    lookup_field = 'urls'
