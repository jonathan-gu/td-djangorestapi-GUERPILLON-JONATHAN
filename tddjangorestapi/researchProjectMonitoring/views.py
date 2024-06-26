from rest_framework import viewsets
from .models import ResearchProject, Researcher, Publication
from .serializers import ResearchProjectSerializer, ResearcherSerializer, PublicationSerializer

# Create your views here.

class ResearchProjectViewSet(viewsets.ModelViewSet):
    queryset = ResearchProject.objects.all()
    serializer_class = ResearchProjectSerializer

class ResearcherViewSet(viewsets.ModelViewSet):
    queryset = Researcher.objects.all()
    serializer_class = ResearcherSerializer

class PublicationViewSet(viewsets.ModelViewSet):
    queryset = Publication.objects.all()
    serializer_class = PublicationSerializer