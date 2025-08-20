from django.db import models

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
    