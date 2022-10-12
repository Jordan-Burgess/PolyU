from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Profile, Conversation, Message, User
from .serializer import UserSerializer

class Users(APIView):
    def get(self, request):
        data = User.objects.all()
        serializer = UserSerializer(data, many=True)
        return Response(serializer.data)

class UserInfo(APIView):
    def get(self, request, id):
        data = list(User.objects.values().filter(id=id))
        data.append(list(Profile.objects.values().filter(user_id=id)))
        return JsonResponse(data, safe=False)

class Conversations(View):
    def get(self, request, pk):
        data = list(Message.objects.values().filter(conversation_id=pk))
        return JsonResponse(data, safe=False)