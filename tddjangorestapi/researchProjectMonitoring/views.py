from rest_framework import viewsets
from .models import ResearchProject
from .serializers import ResearchProjectSerializer

# Create your views here.

class ResearchProjectViewSet(viewsets.ModelViewSet):
    queryset = ResearchProject.objects.all()
    serializer_class = ResearchProjectSerializer