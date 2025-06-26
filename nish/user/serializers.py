from rest_framework import serializers
from .models import User_Profile
from django.contrib.auth.models import User

                                # class UserProfileSerializer():
                                #     class Meta :
                                #         model = User_Profile
                                #         fields = ['phoneNumber', 'address', 'city', 'state', 'zipcode' , 'country']
class UserProfileSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)
    email = serializers.CharField(source='user.email', read_only=True)
    first_name = serializers.CharField(source='user.first_name', read_only=True)
    last_name = serializers.CharField(source='user.last_name', read_only=True)
    class Meta:
        model = User_Profile
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    #profile = UserProfileSerializer()  # nested serializer
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'first_name', 'last_name']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data.get('email', ''),
            first_name=validated_data.get('first_name', '')
        )
        return user