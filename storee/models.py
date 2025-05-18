from django.db import models

# Create your models here.
class Products(models.Model):
    productName= models.CharField(max_length= 30 , null= True)
    productId = models.CharField(max_length=5)
    price = models.CharField(max_length=15)
    #image = 

    def __str__(self):
        return self.productName

class ProductDetails(models.Model):
    product = models.OneToOneField(Products , on_delete= models.CASCADE)

    yarnType = models.CharField(max_length= 15)
    category = models.CharField(max_length=15)
    size = models.CharField(max_length= 10)

    def __str__(self):
        return f"{self.product} + {self.yarnType} + {self.category} + {self.size}"
    
