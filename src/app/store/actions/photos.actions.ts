import { createAction, props } from '@ngrx/store';

export const LoadPhotos = createAction(
  '[Photos] Load Photos',
  props<{ page: number }>()
);

export const LoadPhotosSuccess = createAction(
  '[Photos] Load Photos Success',
  props<{ photos: any[] }>()
);

export const LoadPhotosFailed = createAction(
  '[Photos] Load Photos Failure',
  props<{ error: any }>()
);

export const AddToFavorites = createAction(
  '[Photos] Add To Favorites',
  props<{ photoUrl: string }>()
);

export const SaveFavoritesSuccess = createAction(
  '[Photos] Save Favorites Success'
);

export const SaveFavoritesFailed = createAction(
  '[Photos] Save Favorites Failed',
  props<{ error: any }>()
);
