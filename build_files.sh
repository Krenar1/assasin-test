#!/bin/bash
# Build script for Vercel deploymentyment

echo "Installing dependencies..."echo "Installing dependencies..."










echo "Build completed successfully!"python backend/manage.py collectstatic --noinputecho "Collecting static files..."export PYTHONPATH=$PYTHONPATH:$(pwd)echo "Setting up project path..."pip install -r vercel-requirements.txtpip install -r requirements.txt

echo "Running Django migrations..."
python backend/manage.py makemigrations
python backend/manage.py migrate

echo "Collecting static files..."
python backend/manage.py collectstatic --noinput

# Make script executable
chmod +x build_files.sh

echo "Build completed successfully!"
