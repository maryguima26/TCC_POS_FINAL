from django.contrib import admin
from .models import Aluno,Dicas,Professor
# Register your models here.
@admin.register(Aluno)
class AlunoModel(admin.ModelAdmin):
  list_filter=('nome','email')
  list_display=('nome','email')

@admin.register(Dicas)
class DicaModel(admin.ModelAdmin):
  list_filter=('title','description','aluno')
  list_display=('title','description','aluno')

@admin.register(Professor)
class ProfessorModel(admin.ModelAdmin):
  list_filter=('nome','email')
  list_display=('nome','email')
