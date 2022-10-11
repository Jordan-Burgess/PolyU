from django.contrib import admin
from .models import Profile, Conversation, Message

admin.site.register(Profile)
admin.site.register(Conversation)
admin.site.register(Message)
