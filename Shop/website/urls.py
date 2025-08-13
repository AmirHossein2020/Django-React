from django.urls import path , include
from rest_framework import routers
from website.views import *

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'orderitem', OrderItemViewSet)
router.register(r'cart', CartViewSet)
router.register(r'cartitem', CartItemViewSet)
router.register(r'shipping', ShippingViewSet)
router.register(r'coupon', CouponViewSet)
router.register(r'review', ReviewViewSet)
router.register(r'wishlist', WishlistViewSet)
router.register(r'notification', NotificationViewSet)
router.register(r'payment', PaymentViewSet)
router.register(r'blog', BlogViewSet)
router.register(r'faq', FAQViewSet)
router.register(r'tax', TaxViewSet)
router.register(r'analytics', AnalyticsViewSet)
router.register(r'configuration', ConfigurationViewSet)
router.register(r'refund', RefundViewSet)
router.register(r'vendor', VendorViewSet)
router.register(r'contact', ContactViewSet)
router.register(r'subscription', SubscriptionViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]