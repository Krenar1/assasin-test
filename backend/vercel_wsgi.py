"""
WSGI config for Vercel deployment
"""

import os
import sys

# Add the project directory to the sys.path
path = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if path not in sys.path:
    sys.path.append(path)

# Add the backend directory to the sys.path
backend_path = os.path.join(path, 'backend')
if backend_path not in sys.path:
    sys.path.append(backend_path)

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'asaasin_project.settings')

# Import Django after setting the environment
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()

# Vercel expects a variable named 'app'
app = application
