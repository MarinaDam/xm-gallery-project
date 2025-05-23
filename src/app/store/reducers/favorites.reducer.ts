import { createReducer, on } from '@ngrx/store';
import {
  LoadPhotoFromStorageSuccess,
  RemoveFromFavorites,
} from '../actions/details.actions';
import { FavoritePhotoSelected } from '../actions/favorites.actions';

export interface SelectedFavoritePhoto {
  id: number;
  url: string;
}

export interface FavoritesState {
  emptyFavoritesMessage: string;
  selectedFavoritePhoto: SelectedFavoritePhoto | null;
  selectedPhotoUrl: string;
}

export const initialState: FavoritesState = {
  emptyFavoritesMessage: 'There are no saved favorite photos',
  selectedFavoritePhoto: null,
  selectedPhotoUrl: '',
};

export const FavoritesReducer = createReducer(
  initialState,
  on(FavoritePhotoSelected, (state, { photo }) => ({
    ...state,
    selectedFavoritePhoto: photo,
    selectedPhotoUrl: photo.url,
  })),
  on(LoadPhotoFromStorageSuccess, (state, { photo }) => ({
    ...state,
    selectedPhotoUrl: photo,
  })),
  on(RemoveFromFavorites, (state, { photoUrl }) => ({
    ...state,
    selectedFavoritePhoto: null,
    selectedPhotoUrl: '',
  }))
);
