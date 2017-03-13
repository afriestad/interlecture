#Request handlers

import channels
from questions.models import *
from django.core import serializers
import json
from engine.messaging import need,serverMessage
from engine.access import need_object

def room_channel(room):
    return channels.Group('interlecture.questions.room%d'%room.id)
    
@need_object(Room,access_rights='read')
def subscribe(request,room=None):
    room_channel(room).add(request.message.reply_channel)
    request.send(type='NEW_POSTS',posts=room.get_posts())

@need('text')
@need_object(Room,access_rights='write')
@need_object(Post,key='parent_post',optional=True)
def post(request,room=None,parent_post=None,text=None):
    post=Post(room=room,user=request.message.user,text=text,parent_post=parent_post)
    post.save()
    serverMessage(room_channel(room),type='NEW_POSTS',posts=[post.get()])

handlers={
    'subscribe':subscribe,
    'post':post
  }
