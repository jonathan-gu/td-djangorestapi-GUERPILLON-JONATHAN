from django.db import models
from django.utils import timezone

class ResearchProject(models.Model):
    title = models.CharField(max_length=255, null=False, blank=False)
    description = models.TextField(null=False, blank=False)
    start_date = models.DateField(default=timezone.now, null=False, blank=False)
    end_date_expected = models.DateField(default=timezone.now, null=False, blank=False)
    project_leader = models.ForeignKey('Researcher', on_delete=models.CASCADE, null=False, blank=False, related_name='projects')

    def __str__(self):
        return self.title

class Researcher(models.Model):
    name = models.CharField(max_length=255, null=False, blank=False)
    specialty = models.CharField(max_length=100, null=False, blank=False)

    def __str__(self):
        return self.name

class Publication(models.Model):
    title = models.CharField(max_length=255, null=False, blank=False)
    summary = models.TextField(null=False, blank=False)
    associated_project = models.ForeignKey('ResearchProject', on_delete=models.CASCADE, null=False, blank=False, related_name='publications')
    publication_date = models.DateField(default=timezone.now, null=False, blank=False)

    def __str__(self):
        return self.title
