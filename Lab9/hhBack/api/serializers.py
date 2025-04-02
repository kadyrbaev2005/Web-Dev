# api/serializers.py

from rest_framework import serializers
from .models import Company, Vacancy

# Serializer for the Company model
class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'  # This will include all fields from the model

# Serializer for the Vacancy model
class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = '__all__'  # This will include all fields from the model
