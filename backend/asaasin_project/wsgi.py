"""
WSGI config for asaasin_project project.
"""

import os
import sys

# Add the project root directory to Python path
root_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))
sys.path.insert(0, root_path)

# Add the backend directory to Python path
backend_path = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
sys.path.insert(0, backend_path)

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.asaasin_project.settings')

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()

# Vercel needs this variable to be named 'app'
app = application
