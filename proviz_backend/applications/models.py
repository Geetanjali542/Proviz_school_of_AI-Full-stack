from django.db import models

# Create your models here.


class Applicant(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=12)
    email = models.EmailField(unique=True)
    statement = models.TextField()

    def __str__(self):
        return self.name
