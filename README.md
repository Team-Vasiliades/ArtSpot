from django.contrib import admin
from django.urls import path, include  # Include function is needed

urlpatterns = [
    path('admin/', admin.site.urls),  
    path('', include('pearstech_hackathron_Copy.urls')),  # Connects your app's URLs

]
from django.urls import path
from pearstech_hackathron_Copy.views import home  # Use the full app name
  # Import the view function from views.py

# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
]
