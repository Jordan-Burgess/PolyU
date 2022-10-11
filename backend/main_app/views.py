from django.shortcuts import render
from django.views import View
from django.http import JsonResponse

class Users(View):
    def get(self, request):
        data = {
            "name": "Vaibhav",
            "age": 20,
            "hobbies": ["Coding", "Art", "Gaming", "Cricket", "Piano"]
        }
        return JsonResponse(data)