import { Action, createReducer,on } from "@ngrx/store";
import { increment,decrement,reset } from "../action/actions";


export const initialState = 0;
const _counterReducer =  createReducer(
  initialState,
  on(increment , state=>state+1),
  on(decrement , state=>state-1),
  on(reset,()=>initialState)
);




export function counterReducer(state: number | undefined,action: Action)///representing the current state of the counter, 
//and action, representing the action dispatched to the store.
{
  return _counterReducer(state,action);
}