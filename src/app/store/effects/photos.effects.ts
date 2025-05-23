import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, of, switchMap, withLatestFrom } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { PhotosService } from '../../core/services/photos.service';
import {
  AddToFavorites,
  LoadPhotos,
  LoadPhotosFailed,
  LoadPhotosSuccess,
  SaveFavoritesFailed,
  SaveFavoritesSuccess,
} from '../actions/photos.actions';
import * as selectors from '../selectors/photos.selectors';
import { getFavoritePhotos } from '../selectors/photos.selectors';

@Injectable()
export class PhotosEffects {
  constructor(
    private actions$: Actions,
    private photosService: PhotosService,
    private localStorageService: LocalStorageService,
    private store: Store
  ) {}

  loadPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadPhotos),
      switchMap(({ page }) =>
        this.photosService.getPhotos(page).pipe(
          switchMap((res) => of(LoadPhotosSuccess({ photos: res }))),
          catchError((error) => of(LoadPhotosFailed(error)))
        )
      )
    )
  );

  saveFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddToFavorites),
      withLatestFrom(this.store.select(getFavoritePhotos)),
      switchMap(([action, favoritePhotos]) => {
        this.localStorageService.set('favoritePhotos', favoritePhotos);
        return of(SaveFavoritesSuccess());
      })
    )
  );
}
