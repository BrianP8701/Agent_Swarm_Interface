from flask import current_app

from utils.mongodb import get_kv, update_kv, add_kv, clean

def create_chat(swarm_id, chat_id, chat_name):
    swarm = get_kv('swarms', swarm_id)
    swarm['chat_ids'].append(chat_id)
    swarm['chat_names'][chat_id] = chat_name
    swarm['live_chat_ids'].append(chat_id)
    update_kv('swarms', swarm_id, swarm)
    swarm_chat = {
        'chat_messages': [],
        'alive': True
    }
    add_kv('swarm_chats', chat_id, swarm_chat)
    socketio = current_app.extensions['socketio']
    socketio.emit('new_chat', {'chat_id': chat_id, 'swarm': clean(swarm)}, namespace='/chat')
