import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as selectors from '../selectors/photos.selectors';

@Injectable({
  providedIn: 'root',
})
export class PhotosFacadeService {
  constructor(private store: Store) {}

  // OBSERVABLES

  photos$ = this.store.select(selectors.getPhotos);
  loading$ = this.store.select(selectors.getLoadingStatus);
  page$ = this.store.select(selectors.getPage);
  error$ = this.store.select(selectors.getError);
  favoritePhotos$ = this.store.select(selectors.getFavoritePhotos);
}
