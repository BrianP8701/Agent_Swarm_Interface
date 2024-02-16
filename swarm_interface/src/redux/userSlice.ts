// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string;
  swarm_ids: string[];
  swarm_names: { [swarm_id: string]: string };
  current_swarm_id: string;
  current_chat_id: string;
}

// Define the initial state using that type
const initialState: UserState = {
  username: '',
  swarm_ids: [],
  swarm_names: {},
  current_swarm_id: '',
  current_chat_id: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserSwarms: (state, action: PayloadAction<{ swarm_ids: string[]; swarm_names: { [swarm_id: string]: string } }>) => {
      state.swarm_ids = action.payload.swarm_ids;
      state.swarm_names = action.payload.swarm_names;
    },
    setCurrentSwarmID: (state, action: PayloadAction<string>) => {
      state.current_swarm_id = action.payload;
    },
    setCurrentChatID: (state, action: PayloadAction<string>) => {
      state.current_chat_id = action.payload;
    },
    setUser: (state, action: PayloadAction<UserState>) => {
      state.username = action.payload.username;
      state.swarm_ids = action.payload.swarm_ids;
      state.swarm_names = action.payload.swarm_names;
      state.current_swarm_id = action.payload.current_swarm_id;
      state.current_chat_id = action.payload.current_chat_id;
    },
  },
});

export const { setUserSwarms, setCurrentSwarmID, setCurrentChatID, setUser } = userSlice.actions;
export default userSlice.reducer;
export type { UserState };