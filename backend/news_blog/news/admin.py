from django.contrib import admin
from .models import *



@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    """Категории"""
    search_fields = ('name',)
    list_display = ('name', 'urls')


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    """Новости"""
    search_fields = ('title',)
    list_display = ('title', 'urls')


@admin.register(Additional_news)
class Additional_newsAdmin(admin.ModelAdmin):
    """доп Новости"""
    search_fields = ('text',)
    list_display = ('text', 'urls')