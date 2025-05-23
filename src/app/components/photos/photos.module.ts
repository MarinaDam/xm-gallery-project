import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './photos.component';

const routes: Routes = [
  {
    path: '',
    component: PhotosComponent,
  },
];

@NgModule({
  declarations: [PhotosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
})
export class PhotosModule {}
