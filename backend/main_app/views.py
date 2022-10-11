from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from .models import Profile, Conversation, Message

class Users(View):
    def get(self, request):
        data = list(Profile.objects.values())
        return JsonResponse(data, safe=False)

class Conversations(View):
    def get(self, request):
        data = list(Message.objects.values().filter(conversation_id=2))
        return JsonResponse(data, safe=False)
