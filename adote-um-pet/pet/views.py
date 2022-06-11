from urllib import response
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK,HTTP_201_CREATED,HTTP_400_BAD_REQUEST


from .models import Pet
from .serealizes import PetSerializer

class PetList(APIView):
    def get(self, request, format=None):
        pets = Pet.objects.all()
        serializer = PetSerializer(pets, many=True)
        return Response(serializer.data, status=HTTP_200_OK)
    
    def post(self, request, format=None):
        serializers = PetSerializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data, status=HTTP_201_CREATED)
        return Response(
            {'message': "Houveram falhas na validação", 'errors': serializers.errors},
            status=HTTP_400_BAD_REQUEST,
        )    