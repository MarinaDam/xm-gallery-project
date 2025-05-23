import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites.component';

const routes: Routes = [
  {
    path: '',
    component: FavoritesComponent,
  },
];

@NgModule({
  declarations: [FavoritesComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatFormFieldModule],
})
export class FavoritesModule {}
