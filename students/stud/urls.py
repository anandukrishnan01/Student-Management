from django.contrib import admin
from django.urls import path
from . import views

urlpatterns =[
    path('home',views.Home.as_view(),name='home'),
    path('profile/',views.Profile.as_view(),name='profile'),
    path('editprofile/',views.Editprofile.as_view(),name='editprofile'),
    path('staff/',views.Staffs.as_view(),name='staff'),
    path('enquiry/',views.Enquiry.as_view(),name='enquiry'),
    path('addstudent/',views.StudentAdd.as_view(),name='addstudent'),
    path('showstudent/',views.Showstudent.as_view(),name='showstudent'),
    path('editstudent/',views.Edit.as_view(),name='edit'),
    path('deletestudent/',views.Delete.as_view(),name='delete'),
    
]