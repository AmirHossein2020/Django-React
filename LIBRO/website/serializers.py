from rest_framework import serializers
from .models import *

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class BookOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = book_Order
        fields = '__all__'

class BookSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)
    class Meta:
        model = Book
        fields = '__all__'
