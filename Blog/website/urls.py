from django.urls import path , include
from rest_framework import routers
from website.views import *

router = routers.DefaultRouter()
router.register(r'blogs', BlogViewSet)
router.register(r'authors', AthourViewSet)
router.register(r'tags', TagViewSet)
router.register(r'posts', PostViewSet)


urlpatterns = [
    path('api/', include(router.urls)),
]
