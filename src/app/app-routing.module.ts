import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'photos',
    pathMatch: 'full',
  },
  {
    path: 'photos',
    loadChildren: () =>
      import('./components/photos/photos.module').then((m) => m.PhotosModule),
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('./components/favorites/favorites.module').then(
        (m) => m.FavoritesModule
      ),
  },
  {
    path: 'photos/:id',
    loadChildren: () =>
      import('./components/details/details.module').then(
        (m) => m.DetailsModule
      ),
  },
  {
    path: '**',
    redirectTo: '/photos',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
