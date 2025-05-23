import { createAction, props } from '@ngrx/store';

export const LoadPhotoFromStorage = createAction(
  '[Details] Load Photo From Local Storage'
);

export const LoadPhotoFromStorageSuccess = createAction(
  '[Details] Load Photo From Local Storage Success',
  props<{ photo: string }>()
);

export const RemoveFromFavorites = createAction(
  '[Details] Remove Photo',
  props<{ photoUrl: string }>()
);
