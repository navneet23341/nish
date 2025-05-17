from .serializers import UserSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import User_Profile
from django.http import JsonResponse


@api_view(['GET','POST'])
def user_list(request):
    if request.method == 'GET':
        users = User_Profile.objects.all()
        serializer = UserSerializer(users , many= True)
        return JsonResponse({'users': serializer.data}, safe=False)
    

    if request.method == 'POST':
        serializer = UserSerializer(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data , status= status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
