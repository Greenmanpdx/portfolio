from django.db import models

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=256)
    image = models.ImageField()
    link = models.SlugField()
    description = models.CharField(max_length=256, null=True, blank=True)

    def __str__(self):
        return self.name
