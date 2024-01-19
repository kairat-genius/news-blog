from rest_framework import generics
from .models import *
from .serializers import NewsSerializer, CategorySerializer



class ListNews(generics.ListAPIView):
    serializer_class = NewsSerializer
    queryset = News.objects.all()


"""Admin panel"""
class CategoryAddAdmin(generics.CreateAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class CategoryDetailAdmin(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()
    lookup_field = 'urls'


class NewsAddAdmin(generics.CreateAPIView):
    serializer_class = NewsSerializer
    queryset = News.objects.all()
    lookup_field = 'urls'

class NewsDetailAdmin(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = NewsSerializer
    queryset = News.objects.all()
    lookup_field = 'urls'
