import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    navbarButton : false
}

const toggleSlice = createSlice({
    name:'toggleSlice',
    initialState,
    reducers : {
        setNavbarButton : (state,action) => {
            state.navbarButton = action.payload
        }
    }
})

export const {setNavbarButton} = toggleSlice.actions;

export default toggleSlice.reducer