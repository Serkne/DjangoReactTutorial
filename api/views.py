# Create your views here.
# Here we will have our endpoints
from rest_framework import generics

from api.models import Room
from api.serializers import RoomSerializer


class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
