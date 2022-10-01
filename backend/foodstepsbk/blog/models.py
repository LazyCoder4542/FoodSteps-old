from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
# Permissionmixin allows you to utilize your own user with some of django's permission system.
# You have to add Permission mixin unless it won't work if you are using AbstractBaseUser.
# Abstractuser allows you to inherit some of djangos user model but Abstractbaseuser means you're starting from thr top.
from django.utils import timezone
# The import below allows us to translate certain fields
from django.utils.translation import gettext_lazy as _
from .manager import AuthorManager, PublishedManager
from . import utils
from django.template.defaultfilters import slugify
# from django_countries.fields import CountryField

# Create your models here.

class author(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    username = None
    email = models.EmailField(_('email adress'), unique=True)
    about = models.TextField(_(
        'Tell us something about you.'), max_length=500, blank=True)
    slug = models.SlugField(blank=True, unique=True)
    profile_picture = models.ImageField(blank=True)
    country = models.CharField(_('Enter_country'), null=True, max_length=20)
    state = models.CharField(max_length=25, blank=False)
    start_date = models.DateTimeField(default=timezone.now)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']
    objects = AuthorManager()

    class Meta:
        ordering = ['slug']
        verbose_name = 'Author'

    def __str__(self):
        return self.slug

    # to create a slug

    def gen_random_slug(self):
        random_slug = slugify(self.first_name + self.last_name + utils.gen_random_id())

        while author.objects.filter(slug=random_slug).exists():
            random_slug = slugify(self.first_name + self.last_name + utils.gen_random_id())
        return random_slug

    def save(self, *args, **kwargs):
        if not self.slug:
        # create slug
            self.slug = self.gen_random_slug()
        # save
        super().save(*args, **kwargs)


# category

class Category(models.Model):
    name = models.CharField(max_length=255)

    class Meta:
        verbose_name_plural = "Categories"
        verbose_name = "Category"

    def __str__(self):
        return self.name


# # post


def upload_to(instance, filename):
    return "posts/{filename}".format(filename=filename)

class post(models.Model):
    STATUS_CHOICES = (
        ("draft", "Draft"),
        ("published", "Published"),
    )
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name="post_category", blank=False
    )
    title = models.CharField(max_length=250)
    slug = models.SlugField(
        max_length=250, blank=True, null=True, unique_for_date="publish"
    )
    author = models.ForeignKey(author, on_delete=models.CASCADE, related_name="blog_posts_author",
     blank=False)
    tag = models.CharField(_('Enter your keywords, enter about 5 keywords'), max_length=200,
    blank=True, null=True)
    body = models.TextField(blank=False, null=True)
    image = models.ImageField(_("Image"), upload_to=upload_to, blank=True, null=True)
    publish = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    updated = models.DateTimeField(auto_now=True, blank=True, null=True)
    status = models.CharField(max_length=15, choices=STATUS_CHOICES, default="draft")
    objects = models.Manager()  # The default manager.
    published = PublishedManager()  # Our custom manager. 


    class Meta:
        ordering = ["-publish"]

    
    def gen_random_slug(self):
        random_slug = slugify(self.title)

        while author.objects.filter(slug=random_slug).exists():
            random_slug = slugify(self.title)
        return random_slug

    def save(self, *args, **kwargs):
        if not self.slug:
        # create slug
            self.slug = self.gen_random_slug()
        # save
        super(post, self).save(*args, **kwargs)

    def __str__(self):
        return self.title
        






