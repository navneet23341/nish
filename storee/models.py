from django.db import models

# Create your models here.
class Products(models.Model):
    productName= models.CharField(max_length= 30 , null= True)
    productId = models.CharField(max_length=5)
    price = models.CharField(max_length=15)
    #image = 
