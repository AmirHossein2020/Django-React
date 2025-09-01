from django.contrib import admin
from .models import blog, Author , Post ,tag

# Register your models here.

admin.site.register(blog)
admin.site.register(Author)
admin.site.register(Post)
admin.site.register(tag)