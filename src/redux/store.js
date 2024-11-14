import { configureStore } from "@reduxjs/toolkit";
import newsSlice from './newsSlice'
import previewNewsSlice from './previewNewsSlice'
export const store=configureStore({
    reducer:{
        newsData:newsSlice,
        previewNews:previewNewsSlice
    }
})