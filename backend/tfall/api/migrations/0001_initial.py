# Generated by Django 4.1.4 on 2022-12-07 20:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Aluno",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("nome", models.CharField(max_length=100)),
                ("email", models.EmailField(max_length=254)),
                ("sexo", models.CharField(max_length=2)),
                ("peso", models.FloatField()),
                ("altura", models.IntegerField()),
                ("idade", models.IntegerField()),
                ("nivel", models.IntegerField()),
                ("esporte", models.CharField(max_length=20)),
                (
                    "user",
                    models.OneToOneField(
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]
