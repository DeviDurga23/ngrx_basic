import { createFeatureSelector } from "@ngrx/store";
import { Product } from "../Models/product.interface";

export const productState = createFeatureSelector<ReadonlyArray<Product>>("products"); 

//Here this selector is used to select the product state from the store.