from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User


@receiver(post_save,sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender,instance=None,created=False, **kwargs):
  if created: 
    Token.objects.create(user=instance)

class Aluno(models.Model):
  user    = models.OneToOneField(User,null=True,on_delete=models.CASCADE)
  nome    = models.CharField(max_length=100)
  email   = models.EmailField(max_length=254)
  sexo    = models.CharField(max_length=2)
  peso    = models.FloatField()
  altura  = models.IntegerField()
  idade   = models.IntegerField()
  nivel   = models.IntegerField()
  esporte = models.CharField(max_length=20)

  def __str__(self):
    return f"{self.nome}"
  
class Professor(models.Model):
  user = models.OneToOneField(User,null=True,on_delete=models.CASCADE)
  nome = models.CharField(max_length=100)
  email = models.EmailField(max_length=254)
  
  
  def __str__(self):
    return f"{self.nome}"

class Dicas(models.Model):
  title = models.CharField(max_length=100)
  description = models.TextField()
  aluno = models.ForeignKey(Aluno,on_delete=models.CASCADE)

  def __str__(self):
    return f"{self.aluno}"
