# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/8dfcfa18-eeeb-4f15-82e1-aacdcfdc06b8

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/8dfcfa18-eeeb-4f15-82e1-aacdcfdc06b8) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

**Frontend:**
- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

**Backend:**
- Django
- Django REST Framework
- SQLite (default) / PostgreSQL (optional)

## Backend Setup

To set up the Django backend:

```sh
# Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Navigate to the backend directory
cd backend

# Run migrations
python manage.py migrate

# Create a superuser
python manage.py createsuperuser

# Run the development server
python manage.py runserver
```

The backend will be available at http://127.0.0.1:8000/

Key endpoints:
- Admin: http://127.0.0.1:8000/admin/
- API: http://127.0.0.1:8000/api/

## Environment Variables

Copy .env.example to .env in the root directory and adjust the settings as needed:

```sh
cp .env.example .env
```

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/8dfcfa18-eeeb-4f15-82e1-aacdcfdc06b8) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
