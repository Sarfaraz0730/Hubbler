
import {createStore } from 'redux'
import { Reducer } from './reducer'

export const store = createStore(Reducer)

console.log("entire Store is here Veeru: " , store.getState())