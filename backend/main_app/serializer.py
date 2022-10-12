from rest_framework import serializers
from .models import User, Conversation, Message

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        field = "__all__"

class ConversationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conversation
        field = "__all__"

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        field = "__all__"