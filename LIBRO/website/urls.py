from django.urls import path
from . import views
from .views import BookDetailView

urlpatterns = [
    path('api/categories/', views.CategoryListView.as_view(), name='category-list'),
    path('api/books/', views.book_list, name='book-list'),
    path('api/book-order/', views.create_book_order, name='book-order'),
    path('api/search/', views.search_books, name='search_books'),
    path('api/books/<int:pk>/', BookDetailView.as_view(), name='book-detail'),
]
