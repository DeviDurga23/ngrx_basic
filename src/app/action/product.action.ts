import { createAction, props } from "@ngrx/store";
import { Product } from "../Models/product.interface";


export const addProduct = createAction('[productComponent] Add',props< {product :  Product}>());
export const removeProduct = createAction('[productComponent] remove',props<{id:string}>());