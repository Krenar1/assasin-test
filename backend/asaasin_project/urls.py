"""
URL configuration for asaasin_project project.
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import RedirectView

urlpatterns = [
    # Make sure admin URLs work with or without trailing slash
    path('admin/', admin.site.urls),
    path('admin', RedirectView.as_view(url='/admin/', permanent=True)),
    path('api/', include('asaasin_api.urls')),
    path('api', RedirectView.as_view(url='/api/', permanent=True)),
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
