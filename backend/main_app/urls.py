from django.urls import path
from . import views

urlpatterns = [
    path('', views.Users.as_view(), name="users"),
    path('conversations/', views.Conversations.as_view(), name="conversations")
]