import imp
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from .models import Board, List, Card
from .serializers import BoardSerializer, ListSerializer, CardSerializer

# Create your views here.


@csrf_exempt
def BoardAPI(request, id=0):
    if request.method == 'GET':  # Get all records
        boards = Board.objects.all()
        boards_serializer = BoardSerializer(boards, many=True)
        return JsonResponse(boards_serializer.data, safe=False)

    elif request.method == 'POST':  # Create new record
        board_data = JSONParser().parse(request)
        board_serializer = BoardSerializer(data=board_data)
        if board_serializer.is_valid():
            board_serializer.save()
            return JsonResponse("Added successfully", safe=False)
        return JsonResponse("Failed to add", safe=False)

    elif request.method == 'PUT':  # Update a record
        board_data = JSONParser().parse(request)
        board = Board.objects.get(Id=board_data['Id'])
        board_serializer = BoardSerializer(board, data=board_data)
        if board_serializer.is_valid():
            board_serializer.save()
            return JsonResponse("Updated successfully", safe=False)
        return JsonResponse("Failed to update", safe=False)

    elif request.method == 'DELETE':  # Delete a record
        board = Board.objects.get(Id=id)
        board.delete()
        return JsonResponse("Deleted successfully", safe=False)
