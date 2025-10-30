from django.db import models

# Create your models here.

# This is a model for the about page and about library
class About(models.Model):
    name_library = models.CharField(max_length=200)
    content = models.TextField()
    address = models.CharField(max_length=200)
    phone = models.CharField(max_length=200)

    def __str__(self):
        return self.content


# This is a model for the contact page
class Contact(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return self.name


# This is a model for the category
class Category(models.Model):
    name = models.CharField(max_length=200)
    def __str__(self):
        return self.name


# This is a model for the book
class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    summary = models.TextField()
    image = models.ImageField(upload_to='book_images', null=True, blank=True)
    isbn = models.CharField('ISBN', max_length=13, unique=True)
    genre = models.CharField(max_length=200, help_text='Enter a book genre (e.g. Science Fiction, Romance, etc.)')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.title