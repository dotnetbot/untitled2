from django.shortcuts import render
from django.http import HttpResponse
from django.template import RequestContext, loader
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from showcase.serializers import UserSerializer, GroupSerializer


def index(request):
    template = loader.get_template('showcase/index.html')
    context = RequestContext(request)

    return HttpResponse(template.render(context))


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer