import {createSlice} from '@reduxjs/toolkit';// install redux toolkit(npm install @reduxjs/toolkit react-redux)


const initialState = {
    currentUser: null,
    loading: false,
    error: false,
};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateUserStart: (state) => {
            state.loading = true;
        },
        updateUserSuccess: (state, action) => {
            state.currentUser = action.loading;
            state.loading = false;
            state.error = false;
        },
        updateUserFailurer: (state, action) => {
            state.loading = false;
            state.error = action.payload; 
        }
    }
});

export const { signInStart, signInSuccess, signInFailure, 
               updateUserFailurer, updateUserStart, updateUserSuccess} = userSlice.actions;

export default userSlice.reducer;