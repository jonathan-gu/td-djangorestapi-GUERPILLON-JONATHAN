from django.contrib import admin
from .models import ResearchProject, Researcher, Publication

# Register your models here.

admin.site.register(ResearchProject)
admin.site.register(Researcher)
admin.site.register(Publication)