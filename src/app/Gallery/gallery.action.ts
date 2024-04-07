import { createAction, props } from "@ngrx/store";
import { GalleryModel } from "./gallery.model";

export const retrievedGallery =  createAction("[Gallery Component] API success",props<{allGallery : GalleryModel[]}>());