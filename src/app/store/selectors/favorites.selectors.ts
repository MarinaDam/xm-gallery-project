import { createSelector } from '@ngrx/store';
import { getPhotoLibraryState } from '../reducers';
import { getFavoritePhotos } from '../selectors/photos.selectors';

export const getFavoritesState = createSelector(
  getPhotoLibraryState,
  (state) => state.favorites
);

export const getEmptyFavoritesMessage = createSelector(
  getFavoritesState,
  ({ emptyFavoritesMessage }) => emptyFavoritesMessage
);

export const getShowEmptyFavoritesMessage = createSelector(
  getFavoritePhotos,
  (favoritePhotos) => favoritePhotos.length === 0
);

export const getSelectedFavoritePhoto = createSelector(
  getFavoritesState,
  (state) => state.selectedFavoritePhoto
);

export const getSelectedPhotoUrl = createSelector(
  getFavoritesState,
  (state) => state.selectedPhotoUrl
);
