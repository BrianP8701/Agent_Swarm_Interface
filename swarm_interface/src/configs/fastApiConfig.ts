const flaskConfig = {
    login_url: "http://lvh.me:5000/auth/login",
    signup_url: "http://lvh.me:5000/auth/signup",
    auth_token_url: "http://lvh.me:5000/auth/auth_token",
    create_swarm_url: "http://lvh.me:5000/spawn/create_swarm",
    delete_swarm_url: "http://lvh.me:5000/spawn/delete_swarm",
    spawn_swarm_url: "http://lvh.me:5000/spawn/spawn_swarm",
    get_chat_url: "http://lvh.me:5000/chat/get_chat",
    set_swarm_url: "http://lvh.me:5000/spawn/get_swarm",
    send_user_message_url: "http://lvh.me:5000/chat/send_user_message",
    backend_url: "http://lvh.me:5000",
    backend_ws_url: "ws://lvh.me:5000/ws",
    create_chat_url: "http://lvh.me:5000/chat/create_chat",
    get_messages_url: "http://lvh.me:5000/chat/get_messages",
};


export default flaskConfig;
