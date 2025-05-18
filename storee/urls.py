from django.urls import path
from . import views

urlpatterns = [
    path("", views.productList , name = "productList"),
    path('<str:productId>/', views.product_details , name= 'product_details')
]