from rest_framework import serializers
from .models import Applicant

# A serializer converts complex data (like Django models) into JSON and vice versa.
class ApplicantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Applicant
        fields = ['id', 'name', 'phone', 'email', 'statement']
