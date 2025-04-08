"""
URL configuration for asaasin_project project.
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import RedirectView

urlpatterns = [
    # Admin URLs with and without trailing slash
    path('admin/', admin.site.urls),
    path('admin', RedirectView.as_view(url='/admin/')),
    
    # API URLs with and without trailing slash
    path('api/', include('api.urls')),
    path('api', RedirectView.as_view(url='/api/')),
    
    # Redirect root to admin for testing
    path('', RedirectView.as_view(url='/admin/')),
]

# Serve static and media files in development
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
