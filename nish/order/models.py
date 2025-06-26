from django.db import models
from django.contrib.auth.models import User
import uuid
from .models import Products

# Create your models here.
class Order(models.Model):
    
    user = models.ForeignKey(User , on_delete = models.CASCADE)
    order_id = models.UUIDField(default=uuid.uuid4 , editable=False , unique=True)
    products = models.ManyToManyField(Products)
    address = models.TextField()
    phone = models.CharField(max_length=15)
    created_at = models.DateTimeField(auto_now_add=True)
    status= models.CharField(max_length=20 , default='pending')

    def __str__(self):
        return f"order {self.order_id} by {self.user.username}"
    
    