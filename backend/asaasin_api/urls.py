from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_nested import routers
from . import views

# Main router
router = routers.SimpleRouter()
router.register(r'projects', views.ProjectViewSet)
router.register(r'profile', views.UserProfileViewSet)

# Nested routers
projects_router = routers.NestedSimpleRouter(router, r'projects', lookup='project')
projects_router.register(r'tasks', views.TaskViewSet, basename='project-tasks')

tasks_router = routers.NestedSimpleRouter(projects_router, r'tasks', lookup='task')
tasks_router.register(r'comments', views.CommentViewSet, basename='task-comments')

urlpatterns = [
    path('', include(router.urls)),
    path('', include(projects_router.urls)),
    path('', include(tasks_router.urls)),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('user/', views.current_user, name='current-user'),
    path('tasks/<int:task_id>/assign/', views.assign_task, name='assign-task'),
]
