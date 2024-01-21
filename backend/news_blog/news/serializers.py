from rest_framework import serializers
from .models import News, Category

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']

class CombinedSerializer(serializers.Serializer):
    news = NewsSerializer(many=True)
    categories = CategorySerializer(many=True)
