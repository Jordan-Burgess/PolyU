from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.CharField(max_length=500)
    banner = models.CharField(max_length=500)
    native_language = models.CharField(max_length=100)
    bio = models.TextField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username

class Conversation(models.Model):
    room = models.CharField(max_length=500)

class Message(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='messages')
    text = models.TextField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
    conversation = models.ForeignKey(Conversation, on_delete=models.CASCADE)


