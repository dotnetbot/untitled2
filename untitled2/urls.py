from django.conf.urls import patterns, include, url
from django.contrib import admin
from rest_framework import routers
from showcase.views import UserViewSet, GroupViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)

urlpatterns = patterns('',
                       # Examples:
                       # url(r'^$', 'untitled2.views.home', name='home'),
                       # url(r'^blog/', include('blog.urls')),
                       url(r'^api/', include(router.urls)),
                       url(r'^api-auth', include('rest_framework.urls', namespace='rest_framework')),
                       url(r'^', include('showcase.urls')),
                       url(r'^admin/', include(admin.site.urls)),
                       )
