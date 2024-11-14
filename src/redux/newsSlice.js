import { createSlice } from "@reduxjs/toolkit";

const initialState=[]
const newSlice=createSlice({
    initialState,
    name:'newData',
    reducers:{
        setNewData:(state,action) => {
            return action.payload
        }
    }
})

export const {setNewData} = newSlice.actions
export default newSlice.reducer;