import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as selectors from '../selectors/favorites.selectors';

@Injectable({
  providedIn: 'root',
})
export class FavoritesFacadeService {
  constructor(private store: Store) {}

  // OBSERVABLES

  emptyFavoritesMessage$ = this.store.select(
    selectors.getEmptyFavoritesMessage
  );
  showEmptyFavoritesMessage$ = this.store.select(
    selectors.getShowEmptyFavoritesMessage
  );

  selectedFavoritePhoto$ = this.store.select(
    selectors.getSelectedFavoritePhoto
  );

  selectedPhotoUrl$ = this.store.select(selectors.getSelectedPhotoUrl);
}
