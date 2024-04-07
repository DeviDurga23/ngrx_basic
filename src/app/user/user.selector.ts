import { createFeatureSelector , createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";
//  StoreModule.forRoot({count : counterReducer,
// products : productReducer,
// UserState : userReducer }) from ere we are selecting this UserState

// selecting whole state example = > id: number;
  // name: string;  username: string; email: string; address: { street: string ; suite: string; city: string; zipcode: 
  //  string; geo: { lat: string; lng: string;}; };  phone: string; website: string; company: { name: string; catchPhrase: string; bs: string;

export const userState = createFeatureSelector<UserState>('UserState');

//selecting single state by

export const selectUsers = createSelector (userState,
  (state : UserState)=>{
    return state.user;
  })

export const selectLoading = createSelector (userState,
    (state : UserState)=>{
      return state.loading;
    })


export const selectLoaded = createSelector (userState,
      (state : UserState)=>{
        return state.loaded;
      })
      
export const selectError = createSelector (userState,
      (state : UserState)=>{
        return state.error;
      })