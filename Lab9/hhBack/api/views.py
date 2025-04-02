from django.shortcuts import render

# Create your views here.
# api/views.py

from rest_framework import generics
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

# List and create Companies
class CompanyListView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

# Retrieve a single Company
class CompanyDetailView(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

# List Vacancies by Company
class VacancyListView(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs['company_id']
        return Vacancy.objects.filter(company_id=company_id)

# List all Vacancies
class VacancyListAllView(generics.ListAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

# Retrieve a single Vacancy
class VacancyDetailView(generics.RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

# Top 10 Vacancies sorted by salary
class TopTenVacanciesView(generics.ListAPIView):
    queryset = Vacancy.objects.all().order_by('-salary')[:10]
    serializer_class = VacancySerializer
