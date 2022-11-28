import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    searchMovies:[]
}

const MovieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{
        setSearchMovies : (state,action) =>{
            state.searchMovies = action.payload
        }
    }
})

export const {setSearchMovies} = MovieSlice.actions;

export default MovieSlice.reducer