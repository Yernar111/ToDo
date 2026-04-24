from rest_framework.viewsets import ModelViewSet
from .models import User, Task
from .serializers import UserSerializer, TaskSerializer

from rest_framework.views import APIView
from rest_framework.decorators import action
from rest_framework.response import Response

from rest_framework import status

from django.views.decorators.csrf import csrf_exempt

from django.http import HttpResponse, JsonResponse


class UserApiView(APIView):
    def get(self, request, name, password):
        a = User.objects.get(name=name, password=password)
        if not a:
            return Response({"error": "Object not found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = UserSerializer(a)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    # @action(detail=False, methods=['get'], url_path=r'tasks_by_user/(?P<user_id>\d+)')
    # def tasks_by_user(self, request, user_id=None):
    #     try:
    #         tasks = Task.objects.filter(user_id=user_id)
    #         serializer = TaskSerializer(tasks, many=True)
    #         return Response(serializer.data)
    #     except Exception as e:
    #         return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
def get_tasks_by_user(request, user_id):
    tasks = Task.objects.filter(user_id=user_id)
    if not tasks:
        return JsonResponse({"error": "Tasks not found"}, status=404)
    serializer = TaskSerializer(tasks, many=True)
    return JsonResponse(serializer.data, safe=False, status=200)