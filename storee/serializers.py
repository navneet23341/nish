from rest_framework import serializers
from .models import Products , ProductDetails


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Products
        field = ['productId','productName','price']


class ProductDetailSerializer(serializers.ModelSerializer):
    productId = serializers.CharField(source='products.productId', read_only=True)
    class Meta:
        model = ProductDetails
        fields = '__all__'