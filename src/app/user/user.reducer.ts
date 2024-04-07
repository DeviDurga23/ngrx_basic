import { createReducer,on } from "@ngrx/store";
import { User } from "../Models/user.model";
import * as UserActions from "../user/user.action"

export interface UserState {
  user: ReadonlyArray<User>; // Corrected the type of user array // user : ReadonlyArray<User[]>,
  loading :boolean;
  loaded:boolean;
  error : any;
  
}

export const initialState : UserState= {
  user : [],
  loading : false,
  loaded : false,
  error : null
}

export const userReducer = createReducer (
  initialState,
  on(UserActions.loadUsers,(state)=>(
  { ...state,
    loading : true
  }            //adding another state  loading : true along with that old state.....
  )),

  on(UserActions.loadUsersSuccess,(state, {users})=>(
    {...state,
      loading:false,
      loaded : true, 
      user: users
    }
  )),

  on(UserActions.loadUsersFailure,(state, {error})=>(
    {...state,
      loading:false,
       error}
  )),

  on(UserActions.addUsers, (state,{user})=>(

  {
    ...state,
    loading : true
  } //user array not modified here
  )),

  on(UserActions.addUsersSuccess, (state,{user})=>(  
    // user: [...state.user, user] 

    {
      ...state,
      loading:false,
      loaded : true,
      user : [...state.user,user]
    } //user array modify here
    )),

    on(UserActions.addUsersFailure,(state, {error})=>(
      {
        ...state,
        loading:false,
        loaded:false,
         error}
    )),

    on(UserActions.removeUsers,(state,{id})=>
    ({
      ...state,
      loading:true,
      loaded:false})),

    on(UserActions.removeUsersSuccess, (state, { id }) => (
      {
        ...state,
        loading: false,
        loaded: true,
        user: state.user.filter(user => user.id !== id)
      }
    )),
    on(UserActions.removeUsersFailure, (state, { error }) => (
      {
        ...state,
        loading: false,
        loaded: false,
        error 
      }
    )),
)