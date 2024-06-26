from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'projects', views.ResearchProjectViewSet)
router.register(r'researchers', views.ResearcherViewSet)
router.register(r'publications', views.PublicationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
