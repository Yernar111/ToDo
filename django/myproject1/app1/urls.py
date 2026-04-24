from rest_framework.routers import DefaultRouter
from django.urls import path
from .views import TaskViewSet, UserApiView, get_tasks_by_user

from django.views.decorators.csrf import csrf_exempt

router = DefaultRouter()
router.register('tasks', TaskViewSet, basename='tasks1')

urlpatterns = router.urls

urlpatterns +=[
    path('users/', csrf_exempt(UserApiView.as_view())),
    path('users/<str:name>/<int:password>/', csrf_exempt(UserApiView.as_view())),
    path('tasks/tasks_by_user/<int:user_id>/', get_tasks_by_user)
]