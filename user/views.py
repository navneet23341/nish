from .serializers import UserSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import User_Profile
from django.http import JsonResponse
from django.contrib.auth.models import User
from .serializers import UserProfileSerializer , UserSerializer


@api_view(['GET','POST'])
def user_list(request):
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users , many= True)
        return JsonResponse({'users': serializer.data}, safe=False)
    

    if request.method == 'POST':
        serializer = UserSerializer(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data , status= status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','POST'])
def user_details(request, username =None):
    if request.method == 'POST':
        try:
            username = request.data.get('username')
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=404)

        data = request.data.copy()
        data['user'] = user.id  # set user ID for the foreign key
        serializer = UserProfileSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User details saved'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    if request.method == 'GET':
        if not username:
            return Response({'error': 'Username parameter is required'}, status=400)

        try:
            user = User.objects.get(username=username)
            user_details = User_Profile.objects.get(user=user)
            serializer = UserProfileSerializer(user_details)
            return Response(serializer.data, status=200)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=404)
        except User_Profile.DoesNotExist:
            return Response({'error': 'User details not found'}, status=404)
