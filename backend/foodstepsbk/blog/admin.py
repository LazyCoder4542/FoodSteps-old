from django.contrib import admin
from .models import Category, author, post
# customizing admin section

from django.contrib.auth.admin import UserAdmin
# Register your models here.


class UserAdminConfig(UserAdmin):
    search_fields = ('slug', 'email', 'first_name',)
    ordering =('start_date',)
    list_filter = ('email', 'is_active', 'is_staff', 'is_superuser',)
    list_display = ('slug', 'first_name', 'last_name', 'email', 'is_active', 'is_staff')

    fieldsets = (
        (None, {'fields': ('profile_picture', 'slug', 'first_name', 'last_name',  'email', 'password',)}),
        ('Personal', {'fields': ('country', 'state', 'about', 'start_date')}),
        ('Permissions', {'fields': ('is_staff', 'is_active',)}),
    )

    add_fieldsets = (
        (None,{
            'classes': ('wide',),
            'fields': ('profile_picture', 'slug', 'first_name', 'last_name',
             'email', 'password1', 'password2',  'country', 'state', 'about', 'is_staff', 'is_active'),
        }),
    )


admin.site.register(author, UserAdminConfig)  
admin.site.register(post)  
admin.site.register(Category)