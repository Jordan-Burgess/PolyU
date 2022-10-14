from django.urls import path, include
from . import views
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('', views.Users.as_view(), name="users"),
    path('<int:id>/', views.UserInfo.as_view(), name="user_info"),
    path('conversations/user/<int:id>/', views.Conversations.as_view(), name="conversations"),
    path('conversations/new/<int:id1>/<int:id2>/', views.CreateConversation.as_view(), name="create_conversations"),
    path('conversations/<int:pk>/', views.ConversationMessages.as_view(), name="conversation_messages"),
    path('token/', views.MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register')
]