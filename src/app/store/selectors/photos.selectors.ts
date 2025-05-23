import { createSelector } from '@ngrx/store';
import { getPhotoLibraryState } from '../reducers';

export const getPhotosState = createSelector(
  getPhotoLibraryState,
  (state) => state.photos
);

export const getPhotos = createSelector(getPhotosState, ({ photos }) => photos);

export const getLoadingStatus = createSelector(
  getPhotosState,
  ({ loading }) => loading
);

export const getPage = createSelector(getPhotosState, ({ page }) => page);

export const getError = createSelector(getPhotosState, ({ error }) => error);

export const getFavoritePhotos = createSelector(
  getPhotosState,
  (state) => state.favoritePhotos
);
