from django.contrib import admin
from .models import blog, Athour , Post ,tag

# Register your models here.

admin.site.register(blog)
admin.site.register(Athour)
admin.site.register(Post)
admin.site.register(tag)