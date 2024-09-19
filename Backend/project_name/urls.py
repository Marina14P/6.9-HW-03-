from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.http import HttpResponse
from django.shortcuts import render

urlpatterns = [
    path('api/', include('chat_app.urls')),
    path('api/', include('users.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

def index(request):
    return HttpResponse("Welcome to the Messenger API!")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('chat_app.urls')),
    path('', index),  # Новый маршрут для корневого URL
]

def index(request):
    return render(request, 'index.html')  # Возвращаем HTML-шаблон

