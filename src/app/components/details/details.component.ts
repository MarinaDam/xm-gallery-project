import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadPhotoFromStorage, RemoveFromFavorites } from 'src/app/store/actions/details.actions';
import { FavoritesFacadeService } from 'src/app/store/services/favorites.facade.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  constructor(
    public favoritesFacade: FavoritesFacadeService,
    private store: Store
  ) {}

  ngOnInit() {
    this.store.dispatch(LoadPhotoFromStorage());
  }

  removeFromFavorites(photoUrl: string) {
    this.store.dispatch(RemoveFromFavorites({ photoUrl }));
  }
}
