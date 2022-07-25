from django.urls import path, include

from api import admin
from api.views import RoomView

urlpatterns = [
    path('home', RoomView.as_view())
]
