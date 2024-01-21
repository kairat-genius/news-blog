from rest_framework import generics
from rest_framework.response import Response

from .models import *
from .serializers import NewsSerializer, CategorySerializer,CombinedSerializer

# class CategoryList(generics.ListAPIView):
#     queryset = Category.objects.all()
#     serializer_class = CategorySerializer
#
class NewsList(generics.ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

class NewsDetail(generics.RetrieveAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    lookup_field = 'urls'
class CombinedList(generics.ListAPIView):
    serializer_class = CombinedSerializer  # CombinedSerializer должен быть создан

    def list(self, request, *args, **kwargs):
        news_data = News.objects.all()
        category_data = Category.objects.all()

        combined_data = {
            'news': NewsSerializer(news_data, many=True).data,
            'categories': CategorySerializer(category_data, many=True).data,
        }

        return Response(combined_data)

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
