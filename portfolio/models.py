from django.db import models
from . highScores import HighScores



from operator import attrgetter
from picklefield.fields import PickledObjectField
import pickle

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=256)
    image = models.ImageField()
    link = models.SlugField()
    description = models.CharField(max_length=256, null=True, blank=True)

    def __str__(self):
        return self.name

class WaAhighScores(models.Model):
    name = models.CharField(max_length=256)
    score = models.IntegerField()

class WaAhighScoresList(models.Model):
    scores = models.ManyToManyField('WaAhighScores', blank=True)
    highScores = PickledObjectField(null=True)

    def pickle_list(self):
        highScores = HighScores()
        score_list = [s for s in self.scores.all()]
        sorted_score_list = sorted(
            score_list,
            key=attrgetter('score'),
            reverse=True)
        for x in sorted_score_list:
            highScores.add_score(x)
        self.highScores = pickle.dumps(highScores)