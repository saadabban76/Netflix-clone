import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userStatus:false,
    email:''
}

const userSlice = createSlice({
    name:"userSlice",
    initialState,
    reducers: {
        setUserStatus: (state, action) =>{
            state.userStatus = action.payload
        },
        setEmail : (state, action) => {
            state.email = action.payload
        }
    }
})

export const {setUserStatus, setEmail} = userSlice.actions;

export default userSlice.reducer