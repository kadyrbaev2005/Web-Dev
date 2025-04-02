# api/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.CompanyListView.as_view(), name='company-list'),
    path('companies/<int:pk>/', views.CompanyDetailView.as_view(), name='company-detail'),
    path('companies/<int:company_id>/vacancies/', views.VacancyListView.as_view(), name='vacancy-list-by-company'),
    path('vacancies/', views.VacancyListAllView.as_view(), name='vacancy-list'),
    path('vacancies/<int:pk>/', views.VacancyDetailView.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', views.TopTenVacanciesView.as_view(), name='top-ten-vacancies'),
]
