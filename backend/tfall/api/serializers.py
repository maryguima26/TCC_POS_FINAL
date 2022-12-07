from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Aluno,Professor,Dicas
from rest_framework.authtoken.models import Token


class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields =['id','username','password']

    extra_kwargs = {'password':{
      'write_only': True,
      'required': True
    }}
  
  def create(self,validated_data):
    # user = User.objects.create_user(**validated_data)
    user=User(username=validated_data['username'])
    user.set_password(validated_data['password'])
    user.save()
    Token.objects.create(user=user)
    return user


class AlunoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Aluno
    fields = ['id','user','nome','email','sexo','peso','altura','idade','nivel','esporte']

class ProfessorSerializer(serializers.ModelSerializer):
  class Meta:
    model = Professor
    fields = ['id','nome','email']


class DicaSerializer(serializers.ModelSerializer):
  class Meta:
    model = Dicas
    fields = ['id','title','description','aluno']
