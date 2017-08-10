from django.shortcuts import render
from .models import Project
# Create your views here.
def index(request):
    projects = Project.objects.all()
    context_dict = {

        'projects': projects
    }
    return render(request, 'portfolio/index.html', context_dict)

def whackAnAlien(request):


    return render(request, 'portfolio/whackAnAlien/whackAnAlien.html')


def weather(request):

    return render(request, 'portfolio/weather/index.html')


def earthquake(request):

    return render(request, 'portfolio/earthquake/index.html')


def angryDice(request):

    return render(request, 'portfolio/angryDice/angry_dice_jquery.html')


def burrito(request):

    return render(request, 'portfolio/Burrito/index.html')


def thanks(request):

    return render(request, 'portfolio/Burrito/thanks.html')