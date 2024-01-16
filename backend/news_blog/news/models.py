from django.db import models

class Category(models.Model):
    name = models.CharField()
    urls = models.SlugField()

class News(models.Model):
    title = models.CharField()
    img = models.ImageField()
    text = models.TextField()
    create_at = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(
        Category,
        related_name="category",
        on_delete=models.SET_NULL,
        null=True)





