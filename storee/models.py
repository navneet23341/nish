from django.db import models

# Create your models here.
class Products(models.Model):
    productId = models.CharField(max_length=5)
    price = models.CharField(max_length=15)
    #image = 
