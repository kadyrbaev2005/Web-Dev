from django.contrib import admin
from .models import Company, Vacancy

# Register the Company and Vacancy models to appear in the admin panel
admin.site.register(Company)
admin.site.register(Vacancy)