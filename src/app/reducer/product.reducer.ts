import { createReducer,on } from "@ngrx/store";
import * as productActions from "../action/product.action";
import { Product } from "../Models/product.interface";


export const initialState:ReadonlyArray<Product> =[];

export const productReducer = createReducer(
  initialState,
  on(productActions.addProduct,(state,{product})=>
  {
   return [...state, product]; 
  }),                                    //key name only used from  props
  on(productActions.removeProduct,(state,{id})=>
  {
    return state.filter(product=> product.id!==id);
  }),

)