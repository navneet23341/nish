from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from .models import ProductDetails , Products
from .serializers import ProductSerializer , ProductDetailSerializer
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
@api_view(['GET','POST'])
def productList(request):
    if request.method == 'GET':
        products = Products.objects.all()
        serializer = ProductSerializer(products , many= True)
        return JsonResponse({'products': serializer.data}, safe=False)
    

    if request.method == 'POST':
        serializer = ProductSerializer(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data , status= status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


@api_view(['GET','POST'])
def product_details(request, productId =None):
    if request.method == 'POST':
        try:
            productId = request.data.get('productId')
            product = Products.objects.get(productId=productId)
        except Products.DoesNotExist:
            return Response({'error': 'Products not found'}, status=404)

        data = request.data.copy()
        data['user'] = user.id  # set user ID for the foreign key
        serializer = ProductDetailSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'product details saved'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    if request.method == 'GET':
        if not productId:
            return Response({'error': 'productId parameter is required'}, status=400)

        try:
            product = Products.objects.get(productId=productId)
            product_details = product_details.objects.get(product=product)
            serializer = ProductDetailSerializer(product_details)
            return Response(serializer.data, status=200)
        except Products.DoesNotExist:
            return Response({'error': 'User not found'}, status=404)
        except product_details.DoesNotExist:
            return Response({'error': 'User details not found'}, status=404)
