from rest_framework.decorators import api_view
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from .models import *
from rest_framework.permissions import AllowAny
from .serializers import *

class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

@api_view(['POST'])
@permission_classes([AllowAny])
def create_book_order(request):
    serializer = BookOrderSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Book order submitted successfully!"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def book_list(request):
    category_id = request.GET.get('category')
    if category_id:
        books = Book.objects.filter(category_id=category_id)
    else:
        books = Book.objects.all()
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def search_books(request):
    query = request.GET.get('q', '')
    books = Book.objects.all()

    if query:
        books = books.filter(title__icontains=query) | books.filter(author__icontains=query)

    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)

class BookDetailView(generics.RetrieveAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer