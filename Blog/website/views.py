from django.shortcuts import render
from .models import blog, Athour , Post
from .serializers import BlogSerializer, AthourSerializer , PostSerializer
from rest_framework import viewsets
from rest_framework.response import Response
# Create your views here.

class BlogViewSet(viewsets.ModelViewSet):
    queryset = blog.objects.all()
    serializer_class = BlogSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

class AthourViewSet(viewsets.ModelViewSet):
    queryset = Athour.objects.all()
    serializer_class = AthourSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)