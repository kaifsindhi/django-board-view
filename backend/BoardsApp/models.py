from tkinter import CASCADE
from django.db import models

# Create your models here.


class Board(models.Model):
    Id = models.AutoField(primary_key=True)
    Title = models.CharField(max_length=100)

    def __str__(self):
        return "[" + str(self.Id) + "]" + " " + self.Title


class List(models.Model):
    Board = models.ForeignKey(Board, on_delete=models.CASCADE)
    Id = models.AutoField(primary_key=True)
    Title = models.CharField(max_length=100)

    def __str__(self):
        return "[" + str(self.Id) + "]" + " " + self.Title


class Card(models.Model):
    List = models.ForeignKey(List, on_delete=models.CASCADE)
    Id = models.AutoField(primary_key=True)
    Title = models.CharField(max_length=100)
    Description = models.CharField(max_length=1000, blank=True, null=True)

    def __str__(self):
        return "[" + str(self.Id) + "]" + " " + self.Title
