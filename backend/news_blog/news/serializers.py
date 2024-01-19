from rest_framework import serializers
from .models import News, Category

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        exclude = ['urls']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']
