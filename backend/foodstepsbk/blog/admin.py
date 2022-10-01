from django.contrib import admin
from .models import Category, author, post

# customizing admin section
from . import forms

from django.contrib.auth.admin import UserAdmin
# Register your models here.


class UserAdminConfig(UserAdmin):
    add_form = forms.AuthorCreationForm
    form = forms.AuthorChangeForm

    search_fields = ['slug', 'email', 'first_name',]
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


# Admin configurstion for post
class PostAdmin(admin.ModelAdmin):
      model = post

      search_fields = ['title', 'category__id', 'author__id', 'tag',]
      fieldsets = (
        (None, {'fields': ('title', 'body', 'image', 'category', 'tag', 'status',
        'slug', 'author',)}),

    )

      add_fieldsets = (
           (None, {
              'classes': ('wide',),
              'fields': ('title', 'body', 'image', 'category', 'tag', 'status',
              'slug', 'author',)
        }),
    )
     

admin.site.register(post, PostAdmin)  
admin.site.register(Category)