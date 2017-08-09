import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SECRET_KEY = 'cn)mt_$b#ozg=$+%0j=^r+7j&)$b7sz4mxv!c7f0oz2d=d%0s#'

DEBUG = True

ALLOWED_HOSTS = []

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'portfolio', "static"),
    ]



MEDIA_ROOT =  os.path.join(BASE_DIR,  "media")





