# models.py
from django.db import models

class User(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)

    def _str_(self):
        return self.email