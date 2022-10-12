from django.urls import path
from . import views

urlpatterns = [
    path('', views.Users.as_view(), name="users"),
    path('<int:id>/', views.UserInfo.as_view(), name="user_info"),
    path('conversations/<int:pk>/', views.Conversations.as_view(), name="conversations"),
]