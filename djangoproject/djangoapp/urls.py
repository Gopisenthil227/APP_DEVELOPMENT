from django.urls import path
from .views import (
    create_user, read_users, update_user, delete_user,

)

urlpatterns = [
    # API views
    path('api/create_user/', create_user),
    path('api/read_users/', read_users),
    path('api/update_user/<int:user_id>/', update_user),
    path('api/delete_user/<int:user_id>/', delete_user),
]