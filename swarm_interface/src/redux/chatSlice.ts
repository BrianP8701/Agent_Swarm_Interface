// chat.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
    role: string;
    content: string;
}

interface ChatState {
    messages: Message[];
    alive: boolean;
    node_id: string;
    owner: string;
};

const initialState: ChatState = {
    messages: [],
    alive: false,
    node_id: '',
    owner: ''
};

const chatSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setChat: (state, action: PayloadAction<ChatState>) => {
            state.messages = action.payload.messages;
            state.alive = action.payload.alive;
            state.node_id = action.payload.node_id;
            state.owner = action.payload.owner;
        },
        addMessage: (state, action: PayloadAction<Message>) => {
            state.messages.push(action.payload);
        },
        setMessages: (state, action: PayloadAction<Message[]>) => {
            state.messages = action.payload;
        },
        clearMessages: (state) => {
            state.messages = [];
        }
    },
});

export const { setChat, addMessage, clearMessages, setMessages } = chatSlice.actions;
export default chatSlice.reducer;
export type { ChatState };