from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import PetsViewSet

router = DefaultRouter()
router.register(r"", PetsViewSet, basename="charity")

urlpatterns = [
    path("", include(router.urls)),
]