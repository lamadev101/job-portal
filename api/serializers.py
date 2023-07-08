from rest_framework import serializers
from api.models import *
from django.utils.encoding import smart_str, force_bytes, DjangoUnicodeDecodeError


class AdminRegSerializer(serializers.ModelSerializer):
  password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
  class Meta:
    model = Admin
    fields = ['email', 'fname', 'lname', 'password', 'password2']
    extra_kwargs={
      'password': {'write_only':True}
    }

  def validation(self, attrs):
    password = attrs.get('password')
    password2 = attrs.get('password2')
    if password != password2:
      raise serializers.validationError("Password and Confrim Password doesn't match")
    return attrs

  def create(self, validate_data):
    return Admin.objects.create_user(**validate_data)

  
class AdminLoginSerializer(serializers.ModelSerializer):
  email = serializers.EmailField(max_length=255)
  class Meta:
    model = Admin
    fields = ['email', 'password']

class TestimonialsSerializers(serializers.ModelSerializer):
  tId = serializers.ReadOnlyField()
  class Meta:
    model = Testimonials
    fields = "__all__"

class EmploymentSerializers(serializers.ModelSerializer):
  eId = serializers.ReadOnlyField()
  class Meta:
    model = Employment
    fields = "__all__"

class ApplicationSerializers(serializers.ModelSerializer):
  aId = serializers.ReadOnlyField()
  class Meta:
    model = Application
    fields = "__all__"

  # emp = serializers.PrimaryKeyRelatedField(queryset=Employment.objects.all())

class RemarkSerializers(serializers.ModelSerializer):
  rId = serializers.ReadOnlyField()
  class Meta:
    model = Remark
    depth = 1
    fields = "__all__"
