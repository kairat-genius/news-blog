from rest_framework import serializers
from .models import News, Category, Additional_news

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class Additional_newsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Additional_news
        fields = '__all__'

class NewsDetailSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    additional_news = Additional_newsSerializer()
    class Meta:
        model = News
        fields = '__all__'

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'


class NewsAddAdminSer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'