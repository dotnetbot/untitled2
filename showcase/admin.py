from django.contrib import admin
from showcase.models import User

class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'lastname']

admin.site.register(User, UserAdmin)
