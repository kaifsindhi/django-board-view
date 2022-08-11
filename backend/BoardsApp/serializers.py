from rest_framework import serializers
from .models import Board, List, Card


class BoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Board
        fields = ('Id', 'Title')


class ListSerializer(serializers.ModelSerializer):
    class Meta:
        model = List
        fields = ('Id', 'Title')


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ('List', 'Id', 'Title', 'Description')
