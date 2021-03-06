"""djangoPortfolio URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from portfolio import views as page_views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', page_views.index, name='index'),
    url(r'^whackAnAlien', page_views.whackAnAlien, name='whackAnAlien'),
    url(r'^weather', page_views.weather, name='weather'),
    url(r'^earthquake', page_views.earthquake, name='earthquake'),
    url(r'^angryDice', page_views.angryDice, name='angryDice'),
    url(r'^burrito', page_views.burrito, name='burrito'),
    url(r'^thanks', page_views.thanks, name='thanks'),
    url(r'^waAhighScores', page_views.waAhighScores, name='waAhighScores'),
    url(r'^enterName', page_views.enterName, name='enterName'),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
