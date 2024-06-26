from rest_framework import viewsets
from .models import ResearchProject, Researcher
from .serializers import ResearchProjectSerializer, ResearcherSerializer

# Create your views here.

class ResearchProjectViewSet(viewsets.ModelViewSet):
    queryset = ResearchProject.objects.all()
    serializer_class = ResearchProjectSerializer

class ResearcherViewSet(viewsets.ModelViewSet):
    queryset = Researcher.objects.all()
    serializer_class = ResearcherSerializer