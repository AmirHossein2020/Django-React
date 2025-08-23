from django.db import models
from django.utils.text import slugify
# Create your models here.

class Athour(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()

    def __str__(self):
        return self.name

class blog(models.Model):
    titel = models.CharField(max_length=100)
    athour = models.ForeignKey(Athour, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    def __str__(self):
        return self.titel

class Post(models.Model):
    titel = models.CharField(max_length=100)
    athour = models.ForeignKey(Athour, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    blog_post = models.ForeignKey(blog, on_delete=models.CASCADE, null=True, blank=True)
    slug = models.SlugField(max_length=150, unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.titel)
           
            if not self.id:
                super().save(*args, **kwargs)
            self.slug = f"{base_slug}-{self.id}"  
        super().save(*args, **kwargs)

    def __str__(self):
        return self.titel
