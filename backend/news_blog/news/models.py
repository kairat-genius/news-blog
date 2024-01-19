from django.db import models
from autoslug import AutoSlugField

class Category(models.Model):
    name = models.CharField(max_length=100)
    urls = AutoSlugField(unique=True, populate_from='name', null=True)

    def __str__(self):
        return self.name

class News(models.Model):
    title = models.CharField(max_length=100)
    img = models.BinaryField()
    text = models.TextField()
    create_at = models.DateTimeField(auto_now_add=True)
    urls = AutoSlugField(unique=True, populate_from='title', null=True)
    category = models.ForeignKey(
        Category,
        related_name="category",
        on_delete=models.SET_NULL,
        null=True)

    def __str__(self):
        return self.title

# class AdminUsers(models.Model):
#     name = models.CharField()
#     email = models.EmailField()
#     password = models.




