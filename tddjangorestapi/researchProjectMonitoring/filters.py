import django_filters
from .models import ResearchProject, Publication

class ResearchProjectFilter(django_filters.FilterSet):
    start_date = django_filters.DateFilter()
    end_date_expected = django_filters.DateFilter()
    project_leader = django_filters.CharFilter(field_name='project_leader__name', lookup_expr='icontains')
    title = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = ResearchProject
        fields = ['start_date', 'end_date_expected', 'project_leader', 'title']

class PublicationFilter(django_filters.FilterSet):
    publication_date = django_filters.DateFilter()

    class Meta:
        model = Publication
        fields = ['publication_date']