import os

from django.db import models
from PIL import Image
from django.contrib.auth.models import (BaseUserManager, AbstractBaseUser)

from django.db.models.signals import post_delete, post_save
from django.dispatch import receiver
from django.core.files.storage import default_storage

# Create your models here.
class UserManager(BaseUserManager):
  def create_user(self, email, fname, lname, password=None, password2=None):
    if not email:
      raise ValueError("User must have an email address")
    
    user = self.model(
      email = self.normalize_email(email),
      fname=fname,
      lname=lname,
    )

    user.set_password(password)
    user.save(using=self._db)
    return user

  def create_superuser(self, email, fname, lname, password=None):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(
            email,
            password=password,
            fname=fname,
            lname=lname,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user
        
class Admin(AbstractBaseUser):
  id = models.AutoField(primary_key=True)
  email = models.EmailField(max_length=255, unique=True)
  fname= models.CharField(max_length=20)
  lname = models.CharField(max_length=20)
  is_admin = models.BooleanField(default=False)
  is_candi = models.BooleanField(default=False)
  is_org = models.BooleanField(default=False)
  created_at = models.DateTimeField(auto_now_add=True)

  objects = UserManager()
  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['fname', 'lname', 'is_admin']

  def __str__(self):
    return self.email

  def has_perm(self, perm, obj=None):
    return self.is_admin

  def has_module_perms(self, app_label):
    return True

  @property
  def is_staff(self):
    return self.is_admin
  
class Application(models.Model):
  aId = models.AutoField(primary_key=True)
  name = models.CharField(max_length=255, null=True, blank=True)
  email = models.EmailField(max_length=255, null=True, blank=True)
  contact = models.CharField(max_length=20, null=True, blank=True)
  desirejob = models.CharField(max_length=255, null=True, blank=True)
  resume = models.FileField(upload_to="resume/", max_length=255, null=True, default=None)

  status = models.CharField(max_length=50, null=True, blank=True)
  remark = models.TextField(max_length=255, null=True, blank=True)

  is_viewed = models.BooleanField(default=False)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

class Employee(models.Model):
  empId = models.AutoField(primary_key=True)
  user = models.ForeignKey(Admin, on_delete=models.CASCADE)
  coverimg = models.ImageField(upload_to="employee/", blank=True, null=True)
  profileimg = models.ImageField(upload_to="employee/", blank=True, null=True)
  contact = models.CharField(max_length=50, blank=True, null=True)
  fname = models.CharField(max_length=50, blank=True, null=True)
  fname = models.CharField(max_length=50, blank=True, null=True)
  fname = models.CharField(max_length=50, blank=True, null=True)
  fname = models.CharField(max_length=50, blank=True, null=True)
  fname = models.CharField(max_length=50, blank=True, null=True)
  fname = models.CharField(max_length=50, blank=True, null=True)

# Not used now.
class Employment(models.Model):
  eId = models.AutoField(primary_key=True)
  name = models.CharField(max_length=255)
  email = models.EmailField(max_length=255)
  contact = models.CharField(max_length=20)
  desirejob = models.CharField(max_length=255)
  resume = models.FileField(upload_to="resume/", max_length=255, null=True, default=None)
  created_at = models.DateTimeField(auto_now_add=True)

  def __int__(self):
    return self.eId

# Not used now
class Remark(models.Model):
  rId = models.AutoField(primary_key=True)
  emp = models.ForeignKey(Employment, on_delete=models.CASCADE)
  status = models.CharField(max_length=50)
  remark = models.TextField(max_length=255)
  created_at = models.DateTimeField(auto_now_add=True)

  def __int__(self):
    return self.emp.eId

class Testimonials(models.Model):
  tId = models.AutoField(primary_key=True)
  name = models.CharField(max_length=255)
  pos = models.CharField(max_length=255)
  voice = models.TextField()
  image = models.ImageField(upload_to="testimo/")

  def save(self, *args, **kwargs):
    super().save(*args, **kwargs)
    img = Image.open(self.image.path)

    if img.width > 200 or img.height > 200:
      output_size = (200, 200)
      img.thumbnail(output_size)
      img.save(self.image.path)

class ContactUs(models.Model):
  cId = models.AutoField(primary_key=True)
  name = models.CharField(max_length=50, blank=True, null=True)
  email = models.EmailField(max_length=255)
  contact = models.CharField(max_length=20, blank=True, null=True)
  message = models.TextField(max_length=400, blank=True, null=True)

  created_at = models.DateTimeField(auto_now_add=True)

@receiver(post_delete, sender=Application)
def delete_file(sender, instance, **kwargs):
  if instance.resume:
    if os.path.isfile(instance.resume.path):
      os.remove(instance.resume.path)