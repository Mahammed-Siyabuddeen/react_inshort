import { createSlice } from "@reduxjs/toolkit";


const previewNewsSlice=createSlice({
    initialState:null,
    name:"previewNews",
    reducers:{
        setPreviewNews:(state,action) => {
            return action.payload;
        },
        removePreviewNews:(state,action) => {
            return state=null;
        },
    }

})

export const {removePreviewNews,setPreviewNews}=previewNewsSlice.actions;
export default previewNewsSlice.reducer;