import { configureStore } from '@reduxjs/toolkit'
import functionSlice from './Slice/functionSlice'

export default configureStore({
  reducer: {
    function:functionSlice
  },
})