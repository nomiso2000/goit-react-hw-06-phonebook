
import {configureStore} from '@reduxjs/toolkit'
import itemsReducer from './item/itemReducer'

const store = configureStore({
    reducer: {
        items: itemsReducer,
    }
})
export default store;