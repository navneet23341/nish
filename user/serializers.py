from rest_framework import serializers
from .models import User_Profile
from django.contrib.auth.models import User

class UserProfileSerializer():
    class Meta :
        model = User_Profile
        fields = ['phoneNumber', 'address', 'city', 'state', 'zipcode' , 'country']


class UserSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer()  # nested serializer
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'first_name', 'last_name', 'profile']

    def create(self, validated_data):
        profile_data = validated_data.pop('profile')
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', '')
        )
        User_Profile.objects.create(
            user=user,
            address=profile_data['address'],
            city=profile_data['city'],
            state = profile_data['state'],
            zipcode=profile_data['zipcode'],
            country = profile_data['country'],
            phoneNumber=profile_data['phoneNumber']
        )
        return user