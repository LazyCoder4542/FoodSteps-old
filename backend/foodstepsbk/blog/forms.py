from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from .models import author

class AuthorCreationForm(UserCreationForm):
    class Meta:
        model = author
        fields = '__all__'

class AuthorChangeForm(UserChangeForm):
    class Meta:
        model = author
        fields = '__all__'


