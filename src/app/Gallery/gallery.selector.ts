import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "./gallery.state";
import { GalleryModel } from "./gallery.model";

// Select the feature state
export const galleryRootState = createFeatureSelector<AppState>("gallery");

// Select the gallery array from the feature state
export const selectGallery = createSelector(
  galleryRootState,
  (state: AppState) => state.gallery
);

// Selector to get the albumId from the feature state
export const uniqueAlbumIds = createSelector(
  galleryRootState,
  (state: AppState) => state.gallery.map((item: GalleryModel) => item.albumId)
);









