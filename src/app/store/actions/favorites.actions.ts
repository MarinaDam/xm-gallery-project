import { createAction, props } from '@ngrx/store';
import { SelectedFavoritePhoto } from '../reducers/favorites.reducer';

export const LoadFavoritesFromStorage = createAction(
  '[Favorites] Load Favorites From Local Storage'
);

export const LoadFavoritesFromStorageSuccess = createAction(
  '[Favorites] Load Favorites From Local Storage Success',
  props<{ favoritePhotos: string[] }>()
);

export const FavoritePhotoSelected = createAction(
  '[Favorites] Favorite Photo Selected',
  props<{ photo: SelectedFavoritePhoto }>()
);
