# backend/urls.py

from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from trademcgill import views

router = routers.DefaultRouter()
router.register(r'items', views.ItemView, 'item') 

urlpatterns = [
    path('admin/', admin.site.urls),         path('api/', include(router.urls))                # add this
]