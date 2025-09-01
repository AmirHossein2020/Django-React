from website.models import Author, blog , Post, tag
from rest_framework import serializers

class AthourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ['id', 'name','profile_image','cover_image', 'pio', 'location', 'facebook', 'twitter' , 'slug',  'email']

class BlogSerializer(serializers.ModelSerializer):
    athour = AthourSerializer()

    class Meta:
        model = blog
        fields = ['id', 'titel', 'athour', 'content', 'created_at', 'image']

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = tag
        fields = ['id', 'name']

class PostSerializer(serializers.ModelSerializer):
    blog_post = BlogSerializer()
    athour = AthourSerializer()
    tag_post = TagSerializer()
    class Meta:
        model = Post
        fields = ['id', 'titel', 'athour', 'content', 'created_at', 'image', 'blog_post','tag_post', 'slug']

