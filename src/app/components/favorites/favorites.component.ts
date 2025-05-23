import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  FavoritePhotoSelected,
  LoadFavoritesFromStorage,
} from 'src/app/store/actions/favorites.actions';
import { FavoritesFacadeService } from 'src/app/store/services/favorites.facade.service';
import { PhotosFacadeService } from 'src/app/store/services/photos.facade.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  constructor(
    public photosFacade: PhotosFacadeService,
    private store: Store,
    public facade: FavoritesFacadeService
  ) {}

  ngOnInit() {
    this.store.dispatch(LoadFavoritesFromStorage());
  }

  goToPhotoDetails(url: string) {
    const parts = url.split('/');
    const idIndex = parts.indexOf('id') + 1;
    const id = +parts[idIndex];

    if (id !== null) {
      this.store.dispatch(FavoritePhotoSelected({ photo: { id, url } }));
    }
  }
}
