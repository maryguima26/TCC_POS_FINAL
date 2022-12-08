from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication,permissions,viewsets
from rest_framework.permissions import AllowAny, IsAdminUser
from django.contrib.auth.models import User
from .serializers import AlunoSerializer,DicaSerializer,ProfessorSerializer,UserSerializer
from .models import Aluno,Dicas,Professor

from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token




class ListUsers(APIView):
  """
  View to list of all users in the system
  *Requires token authentication
  *Only admin users are able to access this view
  """

  authentication_classes=[authentication.TokenAuthentication]
  permission_classes=[permissions.IsAuthenticated]

  def get(self,request,format=None):
    """
    Return a list of all users
    """
    user_id=[user.pk for user in User.objects.all()]
    return Response(user_id)

class CustomAuthToken(ObtainAuthToken):
  def post(self,request,*args,**kwargs):
    serializer = self.serializer_class(data=request.data,context={'request':request})
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data['user']
    token,created=Token.objects.get_or_create(user=user)
    return Response({
      'token':token.key,
      'user_id':user.pk,
      'username':user.username,
      'first_name':user.first_name
    })


  
class RegisterViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class=UserSerializer
  permission_classes_by_action = {'create': [AllowAny],
                                    'list': [IsAdminUser]}
  def create(self, request, *args, **kwargs):
        return super(RegisterViewSet, self).create(request, *args, **kwargs)
  def get_permissions(self):
    try:
            # return permission_classes depending on `action` 
      return [permission() for permission in self.permission_classes_by_action[self.action]]
    except KeyError: 
            # action is not set return default permission_classes
      return [permission() for permission in self.permission_classes]

  
class AlunoViewSet(viewsets.ModelViewSet):
  queryset = Aluno.objects.all()
  serializer_class=AlunoSerializer
  permission_classes = (permissions.IsAuthenticated,)
  authentication_classes = (authentication.TokenAuthentication,)

class ProfessorViewSet(viewsets.ModelViewSet):
  queryset = Professor.objects.all()
  serializer_class=ProfessorSerializer
  permission_classes = (permissions.IsAuthenticated,)
  authentication_classes = (authentication.TokenAuthentication,)

class DicaViewSet(viewsets.ModelViewSet):
  queryset = Dicas.objects.all()
  serializer_class=DicaSerializer
  permission_classes = (permissions.IsAuthenticated,)
  authentication_classes = (authentication.TokenAuthentication,)