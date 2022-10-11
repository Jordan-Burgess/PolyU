from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from .models import Profile

class Users(View):
    def get(self, request):
        data = list(Profile.objects.values())
        return JsonResponse(data, safe=False)