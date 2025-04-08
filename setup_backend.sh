#!/bin/bash
echo "Setting up Asaasin.ai Django backend..."

echo "Creating virtual environment..."
python -m venv venv

echo "Activating virtual environment..."
source venv/bin/activate

echo "Installing dependencies..."
pip install -r requirements.txt

echo "Setting up Django project..."
cd backend
python manage.py makemigrations api
python manage.py migrate

echo "Creating superuser - follow the prompts..."
python manage.py createsuperuser

echo "Backend setup complete!"
echo "Run the server with: python backend/manage.py runserver"
