from django.contrib import admin
from .models import Aluno,Dicas,Professor,User
# Register your models here.
@admin.register(User)
class UserModel(admin.ModelAdmin):
  list_filter=('username','password')
  list_display=('username','password')

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
