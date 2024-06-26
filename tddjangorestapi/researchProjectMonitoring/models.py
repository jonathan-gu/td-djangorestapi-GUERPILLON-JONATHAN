from django.db import models
from django.utils import timezone

class ResearchProject(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    start_date = models.DateField(default=timezone.now)
    end_date_expected = models.DateField(null=True, blank=True)
    project_leader = models.ForeignKey('Researcher', on_delete=models.SET_NULL, null=True, related_name='projects')

    def __str__(self):
        return self.title

class Researcher(models.Model):
    name = models.CharField(max_length=255)
    specialty = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Publication(models.Model):
    title = models.CharField(max_length=255)
    summary = models.TextField()
    associated_project = models.ForeignKey('ResearchProject', on_delete=models.CASCADE, related_name='publications')
    publication_date = models.DateField(default=timezone.now)

    def __str__(self):
        return self.title
