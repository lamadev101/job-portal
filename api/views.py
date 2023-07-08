from django.shortcuts import render
from django.contrib.auth import authenticate, login

from api.models import *
from api.serializers import *
from api.renderers import *

from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend


# Create your views here.

# Generate Token
def get_tokens_for_admin(user):
  refresh = RefreshToken.for_user(user)
  return {
    'refresh':str(refresh),
    'access':str(refresh.access_token),
  }

class AdminRegView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, format=None):
    serializer = AdminRegSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    admin = serializer.save()
    token = get_tokens_for_admin(admin)
    return Response({'token':token, 'msg':'Registration Successful'},status=status.HTTP_201_CREATED)
    

# class AdminLoginView(APIView):
#   renderer_classes = [UserRenderer]
  
#   def post(self, request, format=None):
#     serializer = AdminLoginSerializer(data=request.data)
#     serializer.is_valid(raise_exception=True)
#     email = serializer.data.get('email')
#     password = serializer.data.get('password')
#     admin = authenticate(email=email, password=password)
#     print("Admin", admin)
#     if admin is not None:
#       token = get_tokens_for_admin(admin)
#       return Response({'token':token, 'msg':'Login Successful!!'}, status=status.HTTP_200_OK)
#     else:
#       return Response({'error':'Username or password is not valid.'}, status=status.HTTP_401_UNAUTHORIZED)


class AdminLoginView(APIView):
  renderer_classes = [UserRenderer]

  def post(self, request, format=None):
    serializer = AdminLoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    email = serializer.data.get('email')
    password = serializer.data.get('password')
    admin = authenticate(request, email=email, password=password)
    print("Admin", admin)
    if admin is not None:
      login(request, admin)
      token = get_tokens_for_admin(admin)
      return Response({'token':token, 'msg':'Login Successful!!'}, status=status.HTTP_200_OK)
    else:
      return Response({'error':'Username or password is not valid.'}, status=status.HTTP_401_UNAUTHORIZED)


class EmploymentViewSet(viewsets.ModelViewSet):
  renderer_classes = [UserRenderer]
  queryset = Employment.objects.all().order_by('-eId')
  serializer_class = EmploymentSerializers

class ApplicationViewSet(viewsets.ModelViewSet):
  renderer_classes = [UserRenderer]
  queryset = Application.objects.all().order_by('-aId')
  serializer_class = ApplicationSerializers
  filter_backends = [DjangoFilterBackend]
  filterset_fields = ['status', 'is_viewed', 'desirejob']

class TestimonialsViewSet(viewsets.ModelViewSet):
  renderer_classes = [UserRenderer]
  queryset = Testimonials.objects.all()
  serializer_class = TestimonialsSerializers
  

class RemarkViewSet(viewsets.ModelViewSet):
  renderer_classes = [UserRenderer]
  queryset = Remark.objects.all().order_by('-rId')
  serializer_class = RemarkSerializers
  filter_backends = [DjangoFilterBackend]
  filterset_fields = ['status']

class NewApplicationViewSet(viewsets.ModelViewSet):
  renderer_classes = [UserRenderer]
  employment = Employment.objects.all()
  remarks = Remark.objects.all()
  queryset = employment.exclude(pk__in=[remark.emp.pk for remark in remarks])
  serializer_class = EmploymentSerializers
  # print(employment)
  # print(remarks)
  # print(queryset)

# class NewApplicationViewSet(viewsets.ModelViewSet):
#   queryset = Employment.objects.all()
#   serializer_class = EmploymentSerializers

#   def list(self, request, *args, **kwargs):
#     employments = Employment.objects.all()
#     remarks = Remark.objects.all()

#     print(employments)
#     print(remarks)

#     unique_emp = employments.exclude(pk__in=[remark.emp.pk for remark in remarks])
#     print(unique_emp)