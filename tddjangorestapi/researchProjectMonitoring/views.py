from rest_framework import viewsets
from .models import ResearchProject, Researcher, Publication
from .serializers import ResearchProjectSerializer, ResearcherSerializer, PublicationSerializer
from rest_framework.permissions import IsAuthenticated
from .filters import ResearchProjectFilter, PublicationFilter

# Create your views here.

class ResearchProjectViewSet(viewsets.ModelViewSet):
    queryset = ResearchProject.objects.all()
    serializer_class = ResearchProjectSerializer
    filterset_class = ResearchProjectFilter
    permission_classes = [IsAuthenticated]

class ResearcherViewSet(viewsets.ModelViewSet):
    queryset = Researcher.objects.all()
    serializer_class = ResearcherSerializer
    permission_classes = [IsAuthenticated]

class PublicationViewSet(viewsets.ModelViewSet):
    queryset = Publication.objects.all()
    serializer_class = PublicationSerializer
    filterset_class = PublicationFilter
    permission_classes = [IsAuthenticated]