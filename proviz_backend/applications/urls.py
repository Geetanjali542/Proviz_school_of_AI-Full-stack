from django.urls import path
from .views import create_applicant

urlpatterns = [
    path('api/applicants/', create_applicant, name='create_applicant'),
]
