import { createReducer, on } from '@ngrx/store';
import { LoadFavoritesFromStorageSuccess } from '../actions/favorites.actions';
import {
  AddToFavorites,
  LoadPhotos,
  LoadPhotosFailed,
  LoadPhotosSuccess,
} from '../actions/photos.actions';
import { RemoveFromFavorites } from '../actions/details.actions';

export interface Photo {
  url: string;
}

export interface PhotosState {
  photos: string[];
  loading: boolean;
  error: any;
  page: number;
  favoritePhotos: string[];
}

export const initialState: PhotosState = {
  photos: [],
  loading: false,
  error: null,
  page: 0,
  favoritePhotos: [],
};

export const PhotosReducer = createReducer(
  initialState,
  on(LoadPhotos, (state, { page }) => ({
    ...state,
    loading: true,
    error: null,
    page,
  })),
  on(LoadPhotosSuccess, (state, { photos }) => ({
    ...state,
    photos: [...state.photos, ...photos],
    loading: false,
  })),
  on(LoadPhotosFailed, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(AddToFavorites, (state, { photoUrl }) => {
    const photoExist = state.favoritePhotos.includes(photoUrl);

    return {
      ...state,
      favoritePhotos: photoExist
        ? state.favoritePhotos
        : [...state.favoritePhotos, photoUrl],
    };
  }),
  on(LoadFavoritesFromStorageSuccess, (state, { favoritePhotos }) => ({
    ...state,
    favoritePhotos: favoritePhotos ? favoritePhotos : [],
  })),
  on(RemoveFromFavorites, (state, { photoUrl }) => {
    const updatedFavorites = state.favoritePhotos.filter(
      (photo) => photo !== photoUrl
    );

    const selectedPhotoUrl = '';
    const selectedFavoritePhoto = '';

    return {
      ...state,
      favoritePhotos: updatedFavorites,
      selectedPhotoUrl,
      selectedFavoritePhoto,
    };
  })
);
