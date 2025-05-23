import { createFeatureSelector } from '@ngrx/store';
import { FavoritesReducer, FavoritesState } from './favorites.reducer';
import { PhotosReducer, PhotosState } from './photos.reducer';

export const featureSharedName = 'SharedStore';

export interface PhotoLibraryState {
  photos: PhotosState;
  favorites: FavoritesState;
}

export const moduleSharedReducers = {
  photos: PhotosReducer,
  favorites: FavoritesReducer,
};

export const getPhotoLibraryState =
  createFeatureSelector<PhotoLibraryState>(featureSharedName);
