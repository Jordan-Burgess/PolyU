from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from .models import Profile, Conversation, Message

class Users(View):
    def get(self, request):
        data = list(Profile.objects.values())
        return JsonResponse(data, safe=False)

class Conversations(View):
    def get(self, request, pk):
        data = list(Message.objects.values().filter(conversation_id=pk))
        return JsonResponse(data, safe=False)

class ConversationCreate(View):
    def post(self, request, host, newuser):
        users = Conversation.objects.get()
