from django.shortcuts import render
from .models import blog, Athour , Post, tag
from .serializers import BlogSerializer, AthourSerializer , PostSerializer, TagSerializer
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
    lookup_field = "slug"

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

class TagViewSet(viewsets.ModelViewSet):
    queryset = tag.objects.all()
    serializer_class = TagSerializer

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