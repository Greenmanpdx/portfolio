from django.shortcuts import render
from .models import Project
# Create your views here.
def index(request):
    projects = Project.objects.all()
    context_dict = {

        'projects': projects
    }
    return render(request, 'portfolio/index.html', context_dict)

def wackAnAlien(request):


    return render(request, 'portfolio/wackAnAlien.html')