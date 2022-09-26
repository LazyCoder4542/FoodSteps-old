from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone
# The import below allows us to translate certain fields
from django.utils.translation import gettext_lazy as _

# Create your models here.

class author(AbstractUser):
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    username = None
    email = models.EmailField(_('email adress'), unique=True)
    about = models.TextField(_(
        'about'), max_length=500, blank=True)
    slug = models.SlugField(blank=True, unique=True)
    profile_picture = models.ImageField(blank=True)
    country = CountryField(blank_label='(select_country)')
    state = models.CharField(blank=False)
    start_date = models.DateTimeField(default=timezone.now)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        ordering = ['email']
        verbose_name = 'Author'

    def __str__(self):
        return self.slug





