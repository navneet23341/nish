from django.urls import path
from . import views 

urlpatterns = [
    path('', views.user_list, name= "userList"),
    path('<str:username>/', views.user_details ,name= "userDetails")
]