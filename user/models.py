from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class User_Profile(models.Model):
    user = models.OneToOneField(User ,on_delete= models.CASCADE)

    phoneNumber = models.CharField(max_length=15)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=40)
    zipcode = models.CharField(max_length=10)
    country = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.user.username}'s Profile"