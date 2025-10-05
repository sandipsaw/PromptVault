import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userData:"",
}


export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        loaduser:(state,action)=>{
            state.userData = action.payload;
        }
    }
})

export default userSlice.reducer;
export const {loaduser}= userSlice.actions