
import {combineReducers} from 'redux';
import itemTypes from './itemTypes'
import {createReducer} from '@reduxjs/toolkit'



const itemsReducer = createReducer([], {
    [itemTypes.ADD]:(state, action) => [...state, action.payload.items],
    [itemTypes.DELETE]: (state, action) => state.filter((contact) => contact.id !== action.payload.id)
})

const filter = createReducer("", {
    [itemTypes.SETFILTER]: (state, action) => action.payload.filter
})

const toggle = createReducer( false, {
    [itemTypes.TOGGLENOT]: (state, {payload}) => !state,
}
)

export default combineReducers({
    items: itemsReducer,
    filter,
    toggle
})