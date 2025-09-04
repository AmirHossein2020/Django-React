from website.models import Author, blog , Post, tag , About, Contect
from rest_framework import serializers


class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = ['titel', 'image1', 'description1', 'image2', 'description2', 'address', 'facebook', 'twitter', 'email', 'slug']

class ContectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contect
        fields = ['name', 'email', 'content', 'slug']
        

class AthourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ['id', 'name','profile_image','cover_image', 'pio', 'location', 'facebook', 'twitter' , 'slug',  'email']

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = tag
        fields = ['id', 'name','description','slug']
class BlogSerializer(serializers.ModelSerializer):
    athour = AthourSerializer()
    
    class Meta:
        model = blog
        fields = ['id', 'titel', 'athour', 'content', 'created_at', 'image']


class PostSerializer(serializers.ModelSerializer):
    blog_post = BlogSerializer()
    athour = AthourSerializer()
    tag_post = TagSerializer()
    class Meta:
        model = Post
        fields = ['id', 'titel', 'athour', 'content', 'created_at', 'image', 'blog_post','tag_post', 'slug']

