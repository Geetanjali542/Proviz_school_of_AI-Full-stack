from django.contrib import admin
from .models import Applicant

class ApplicantAdmin(admin.ModelAdmin):
    # Display these fields in the admin list view
    list_display = ('name', 'phone', 'email', 'statement')
    
    # Add a search bar for these fields
    search_fields = ('name', 'email', 'phone')

# Register the model with the custom admin class
admin.site.register(Applicant, ApplicantAdmin)
