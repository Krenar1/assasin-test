# This file is to redirect Vercel to the proper WSGI application
from backend.asaasin_project.wsgi import app

# The Vercel serverless function entry point
def handler(request, *args, **kwargs):
    return app(request, *args, **kwargs)
