from rest_framework.routers import DefaultRouter
from django.urls import path
from .views import TaskViewSet, UserApiView

from django.views.decorators.csrf import csrf_exempt

router = DefaultRouter()
router.register('tasks', TaskViewSet, basename='tasks1')

urlpatterns = router.urls

urlpatterns +=[
    path('users/', csrf_exempt(UserApiView.as_view())),
    path("users/<str:name>/<int:password>/", csrf_exempt(UserApiView.as_view()))
]