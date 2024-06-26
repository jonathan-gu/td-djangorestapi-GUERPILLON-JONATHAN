from rest_framework import viewsets
from .models import ResearchProject, Researcher, Publication
from .serializers import ResearchProjectSerializer, ResearcherSerializer, PublicationSerializer
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class ResearchProjectViewSet(viewsets.ModelViewSet):
    queryset = ResearchProject.objects.all()
    serializer_class = ResearchProjectSerializer
    permission_classes = [IsAuthenticated]

class ResearcherViewSet(viewsets.ModelViewSet):
    queryset = Researcher.objects.all()
    serializer_class = ResearcherSerializer
    permission_classes = [IsAuthenticated]

class PublicationViewSet(viewsets.ModelViewSet):
    queryset = Publication.objects.all()
    serializer_class = PublicationSerializer
    permission_classes = [IsAuthenticated]

# class ResearchProjectListByProjectLeader(generics.ListAPIView):
#     queryset = ResearchProject.objects.all()
#     serializer_class = ResearchProjectSerializer
#     filter_backends = [DjangoFilterBackend]
#     filterset_fields = ['project_leader']