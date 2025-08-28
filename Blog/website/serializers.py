from website.models import Athour, blog , Post
from rest_framework import serializers

class AthourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Athour
        fields = ['id', 'name', 'email']

class BlogSerializer(serializers.ModelSerializer):
    athour = AthourSerializer()

    class Meta:
        model = blog
        fields = ['id', 'titel', 'athour', 'content', 'created_at', 'image']

class PostSerializer(serializers.ModelSerializer):
    blog_post = BlogSerializer()
    athour = AthourSerializer()
    class Meta:
        model = Post
        fields = ['id', 'titel', 'athour', 'content', 'created_at', 'image', 'blog_post', 'slug']

