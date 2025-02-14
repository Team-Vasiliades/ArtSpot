from django.shortcuts import render

def home(request):
    return render(request, 'index.html')  # This loads your HTML file
from django.shortcuts import render
