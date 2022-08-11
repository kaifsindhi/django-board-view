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
        if id:  # If ID is provided, then get specified Board
            board = Board.objects.get(Id=id)
            board_serializer = BoardSerializer(board)
            return JsonResponse(board_serializer.data, safe=False)

        else:  # If ID is not provided, get all Boards
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


@csrf_exempt
def ListAPI(request, board_id=0, list_id=0):
    if request.method == 'GET':
        if list_id:  # Get specific list on board
            list_ = Board.objects.get(Id=board_id).list_set.all().get(Id=list_id)
            list_serializer = BoardSerializer(list_)
            return JsonResponse(list_serializer.data, safe=False)

        else:  # Get all lists on board
            lists = Board.objects.get(Id=board_id).list_set.all()
            list_serializer = ListSerializer(lists, many=True)
            return JsonResponse(list_serializer.data, safe=False)


@csrf_exempt
def CardAPI(request, board_id=0, list_id=0, card_id=0):
    if request.method == 'GET':
        if card_id: # Get specific card on list
            card = Board.objects.get(Id=board_id).list_set.all().get(Id=list_id).card_set.all().get(Id=card_id)
            card_serializer = BoardSerializer(card)
            return JsonResponse(card_serializer.data, safe=False)

        else: # Get all cards on list
            cards = Board.objects.get(Id=board_id).list_set.all().get(Id=list_id).card_set.all()
            card_serializer = CardSerializer(cards, many=True)
            return JsonResponse(card_serializer.data, safe=False)