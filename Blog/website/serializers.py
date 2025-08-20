from website.models import Athour, blog
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