import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import {
  FavoritePhotoSelected,
  LoadFavoritesFromStorage,
  LoadFavoritesFromStorageSuccess,
} from '../actions/favorites.actions';

@Injectable()
export class FavoritesEffects {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  loadFavoritesFromStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadFavoritesFromStorage),
      map(() => {
        const favorites =
          this.localStorageService.get<string[]>('favoritePhotos') || [];
        return LoadFavoritesFromStorageSuccess({ favoritePhotos: favorites });
      })
    )
  );

  favoritePhotoSelected$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(FavoritePhotoSelected),
        map(({ photo }) => {
          this.router.navigate(['/photos', photo.id]);

          this.localStorageService.set('selectedPhoto', photo.url);
        })
      ),
    { dispatch: false }
  );
}
