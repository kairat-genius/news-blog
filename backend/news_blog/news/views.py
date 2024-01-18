from rest_framework import generics
from .models import *
from .serializers import NewsSerializer, CategorySerializer



class ListNews(generics.ListAPIView):
    serializer_class = NewsSerializer
    queryset = News.objects.all()

