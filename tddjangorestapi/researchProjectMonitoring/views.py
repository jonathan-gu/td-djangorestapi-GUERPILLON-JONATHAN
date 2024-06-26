from rest_framework import viewsets
from .models import ResearchProject, Researcher, Publication
from .serializers import ResearchProjectSerializer, ResearcherSerializer, PublicationSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics

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

# class ResearchProjectListByProjectLeader(generics.ListAPIView):
#     queryset = ResearchProject.objects.all()
#     serializer_class = ResearchProjectSerializer
#     filter_backends = [DjangoFilterBackend]
#     filterset_fields = ['project_leader']