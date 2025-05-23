import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor() {}

  lastPage = 0;

  getPhotos(page: number): Observable<string[]> {
    const numOfPhotos = 12;

    const photos = Array.from({ length: numOfPhotos }, (_, i) => {
      const id = page * numOfPhotos + i;
      return `https://picsum.photos/id/${id}/200/300`;
    });

    const delayMs = 200 + Math.random() * 100;
    return of(photos).pipe(delay(delayMs));
  }
}
