from django.db import models
from django.utils.text import slugify
# Create your models here.

class Author(models.Model):
    name = models.CharField(max_length=100)
    cover_image = models.ImageField(upload_to='athour/cover', null=True, blank=True)
    profile_image = models.ImageField(upload_to='athour/profile', null=True, blank=True)
    pio = models.TextField(null=True,blank=True)
    location = models.TextField(null=True, blank=True)
    facebook = models.CharField(max_length=1000, null=True, blank=True)
    twitter = models.CharField(max_length=1000, null=True, blank=True)
    email = models.EmailField()
    slug = models.SlugField(max_length=150, unique=True, blank=True)
    def __str__(self):
        return self.name
    
class tag(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True)
    slug = models.SlugField(max_length=150, unique=True)
    def __str__(self):
        return self.name
    
class blog(models.Model):
    titel = models.CharField(max_length=100)
    athour = models.ForeignKey(Author, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    def __str__(self):
        return self.titel

class Post(models.Model):
    titel = models.CharField(max_length=100)
    athour = models.ForeignKey(Author, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    blog_post = models.ForeignKey(blog, on_delete=models.CASCADE, null=True, blank=True)
    slug = models.SlugField(max_length=150, unique=True, blank=True)
    tag_post = models.ForeignKey(tag, on_delete=models.SET_NULL, null=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.titel)
           
            if not self.id:
                super().save(*args, **kwargs)
            self.slug = f"{base_slug}-{self.id}"  
        super().save(*args, **kwargs)

    def __str__(self):
        return self.titel

class About(models.Model):
    titel = models.CharField(max_length=300, null=True, blank=True)
    image1 = models.ImageField(upload_to='about/image1',null=True, blank=True)
    description1 = models.TextField(null=True, blank=True)
    image2 = models.ImageField(upload_to='about/image2',null=True, blank=True)
    description2 = models.TextField(null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    facebook = models.CharField(max_length=1000, null=True, blank=True)
    twitter = models.CharField(max_length=1000, null=True, blank=True)
    email = models.EmailField()
    slug = models.SlugField(max_length=150, unique=True, blank=True)

    def __str__(self):
        return self.titel
    
class Contect(models.Model):
    name = models.CharField(max_length=250, null=True, blank=True)
    email = models.EmailField()
    content = models.TextField(null=True,blank=True)
    slug = models.SlugField(max_length=150, unique=True, blank=True)

    def __str__(self):
        return self.name