from django.urls import path
from . import views
from .views import BookDetailView

urlpatterns = [
    path('api/search/', views.search_books, name='search_books'),
    path('api/books/<int:pk>/', BookDetailView.as_view(), name='book-detail'),
]
