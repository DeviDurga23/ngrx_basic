import { createReducer,on } from "@ngrx/store";
import { GalleryModel } from "./gallery.model";
import { retrievedGallery } from "./gallery.action";


export const initialState : GalleryModel[] = [];
export const  _galleryReducer = createReducer(
    initialState,
    on(retrievedGallery ,(state,{allGallery})=>
    {
       return [ ...allGallery];
    })
)

export function galleryReducer (state : any ,actions:any) //create a function to export to other places....
{
  return _galleryReducer(state,actions);
}