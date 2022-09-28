from django.contrib.auth.models import BaseUserManager
from django.utils.translation import gettext_lazy
from django.db import models

class AuthorManager(BaseUserManager):
    # create a user and superuser manager

    def create_user(self, email, password, first_name, last_name, **extra_fields):
        # check email
        email = self.normalize_email(email)
        # some function to check if email is given
        
        if not email:
            raise ValueError(gettext_lazy('you must provide an email address'))
        # take in other user details
        user = self.model(email=email, first_name=first_name, last_name=last_name, **extra_fields)
        # set password
        user.set_password(password)
        user.save()

        return user
   
    def create_superuser(self, email, password, **extra_fields):

        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(
                'superuser must be assigned to is_staff=True.'
            )
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(
                'superuser must be assigned to is_superuser=True.'
            )
        return self.create_user(email, password, **extra_fields)


# manager for post model
    
class PublishedManager(models.Manager):
    def get_queryset(self):
        return super(PublishedManager, self).get_queryset().filter(status="published")

