import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, withLatestFrom } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import {
  LoadPhotoFromStorage,
  LoadPhotoFromStorageSuccess,
  RemoveFromFavorites,
} from '../actions/details.actions';
import { getFavoritePhotos } from '../selectors/photos.selectors';

@Injectable()
export class DetailsEffects {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private store: Store,
    private router: Router
  ) {}

  loadPhotoFromStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadPhotoFromStorage),
      map(() => {
        const selectedPhoto =
          this.localStorageService.get<string>('selectedPhoto') || '';
        return LoadPhotoFromStorageSuccess({ photo: selectedPhoto });
      })
    )
  );

  syncFavoritesAndRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RemoveFromFavorites),
        withLatestFrom(this.store.select(getFavoritePhotos)),
        map(([action, favorites]) => {
          this.localStorageService.set('favoritePhotos', favorites);
          this.router.navigate(['/favorites']);
        })
      ),
    { dispatch: false }
  );
}
