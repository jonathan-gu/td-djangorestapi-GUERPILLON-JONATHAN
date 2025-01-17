# Generated by Django 5.0.6 on 2024-06-26 11:07

import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Researcher',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('specialty', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='ResearchProject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('start_date', models.DateField(default=django.utils.timezone.now)),
                ('end_date_expected', models.DateField(default=django.utils.timezone.now)),
                ('project_leader', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='projects', to='researchProjectMonitoring.researcher')),
            ],
        ),
        migrations.CreateModel(
            name='Publication',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('summary', models.TextField()),
                ('publication_date', models.DateField(default=django.utils.timezone.now)),
                ('associated_project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='publications', to='researchProjectMonitoring.researchproject')),
            ],
        ),
    ]
