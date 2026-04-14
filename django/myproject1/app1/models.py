from django.db import models

class User(models.Model):
    name = models.CharField(max_length=20,  db_column="name")
    password = models.IntegerField(db_column="password")

    class Meta:
        db_table = "users1"
        managed = False

class Task(models.Model):
    description = models.CharField(max_length=100, db_column='description')
    is_done = models.BooleanField(db_column='is_done')
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, db_column='user_id')

    class Meta:
        db_table = "tasks1"
        managed = False
