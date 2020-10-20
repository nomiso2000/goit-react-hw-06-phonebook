import { v4 as uuidv4 } from "uuid";
import actionTypes from './itemTypes'
import {createAction} from '@reduxjs/toolkit'
const addItem = createAction(actionTypes.ADD, (name, number) => ({
    payload: { items: {
        id: uuidv4(),
        name,
        number
    },
    },
}))

const deleteItem = createAction(actionTypes.DELETE, id => ({
    payload: {
        id,
    },
}));

const setFilter = createAction(actionTypes.SETFILTER, filter => ({
    payload: {
        filter,
    },
}));

const setVisible = createAction(actionTypes.TOGGLENOT)

export default {
    addItem,
    deleteItem,
    setFilter,
    setVisible
}