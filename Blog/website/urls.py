from django.urls import path , include
from rest_framework import routers
from website.views import *

router = routers.DefaultRouter()
router.register(r'blogs', BlogViewSet)
router.register(r'athours', AthourViewSet)


urlpatterns = [
    path('api/', include(router.urls)),
]
