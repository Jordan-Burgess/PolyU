from django.urls import path
from . import views

urlpatterns = [
    path('<int:id>/', views.Users.as_view(), name="users"),
    path('conversations/<int:pk>/', views.Conversations.as_view(), name="conversations"),
    path('newconversation/<int:host>/<int:newuser>/', views.ConversationCreate.as_view(), name="create_convo"),
]