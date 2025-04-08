#!/bin/bash
# Build script for Vercel deployment

echo "Installing dependencies..."
pip install -r requirements.txt

echo "Setting up project path..."
export PYTHONPATH=$PYTHONPATH:$(pwd)

echo "Running Django migrations..."
python backend/manage.py makemigrations
python backend/manage.py migrate

echo "Collecting static files..."
python backend/manage.py collectstatic --noinput

# Make script executable
chmod +x build_files.sh

echo "Build completed successfully!"
