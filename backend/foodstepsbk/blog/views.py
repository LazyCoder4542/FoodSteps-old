from django.shortcuts import render

# Create your views here.
def signup(request):
    if user.is_authenticated:
        return redirect("/")