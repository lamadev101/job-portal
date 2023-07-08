from django.urls import path, include
from rest_framework import routers
from api.views import *

router = routers.DefaultRouter()

router.register(r'employment', EmploymentViewSet )
router.register(r'application', ApplicationViewSet )
router.register(r'testimonials', TestimonialsViewSet)
router.register(r'remark', RemarkViewSet)
router.register(r'new-application', NewApplicationViewSet)


urlpatterns = [
    path('register/', AdminRegView.as_view(), name='register'),
    path('login/', AdminLoginView.as_view(), name='login'),
    path("", include(router.urls)) 
]
