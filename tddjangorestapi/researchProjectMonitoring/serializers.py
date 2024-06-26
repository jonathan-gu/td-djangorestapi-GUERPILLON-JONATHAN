from rest_framework import serializers
from .models import ResearchProject, Researcher, Publication

class ResearchProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResearchProject
        fields = '__all__'
        extra_kwargs = {
            'title': {'required': True},
            'description': {'required': True},
            'start_date': {'required': True},
            'end_date_expected': {'required': True},
            'project_leader': {'required': True},
        }

class ResearcherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Researcher
        fields = '__all__'
        extra_kwargs = {
            'name': {'required': True},
            'specialty': {'required': True},
        }

class PublicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publication
        fields = '__all__'
        extra_kwargs = {
            'title': {'required': True},
            'summary': {'required': True},
            'associated_project': {'required': True},
            'publication_date': {'required': True},
        }