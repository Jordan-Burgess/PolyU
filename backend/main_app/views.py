from django.shortcuts import render
from django.views import View
from rest_framework_simplejwt.views import TokenObtainPairView
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import permission_classes
from .models import Profile, Message, User
from .serializer import MessageSerializer, UserSerializer, ProfileSerializer, MyTokenObtainPairSerializer
from main_app import serializer

class Users(APIView):
    def get(self, request):
        data = User.objects.all()
        serializer = UserSerializer(data, many=True)
        return JsonResponse(serializer.data, safe=False)

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class UserInfo(APIView):
    def get_user_auth(self, id):
        return User.objects.all().filter(id=id)
    
    def get_user_profile(self, id):
        return Profile.objects.all().filter(user_id=id)

    def get(self, request, id):
        user = UserSerializer(self.get_user_auth(id), many=True)
        profile = ProfileSerializer(self.get_user_profile(id), many=True)
        return JsonResponse({"user": user.data, "profile": profile.data}, safe=False)

class ConversationMessages(APIView):
    def get(self, request, pk):
        data = Message.objects.all().filter(conversation_id=pk)
        serializer = MessageSerializer(data, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request, pk):
        request.data['conversation'] = pk
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, safe=False)
        else:
            return JsonResponse(serializer.errors)