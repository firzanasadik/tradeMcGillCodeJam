from django.db import models

# Create your models here.
class Item(models.Model):
  title = models.CharField(max_length=120)
  description = models.TextField()
  category = models.TextField()

  def _str_(self):
    return self.title