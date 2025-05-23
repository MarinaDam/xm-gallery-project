import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import {
  AddToFavorites,
  LoadPhotos,
} from 'src/app/store/actions/photos.actions';
import { Photo } from 'src/app/store/reducers/photos.reducer';
import { PhotosFacadeService } from 'src/app/store/services/photos.facade.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  currentPage = 0;
  loading$: Observable<boolean> = this.facade.loading$;

  constructor(private store: Store, public facade: PhotosFacadeService) {}

  ngOnInit() {
    this.store.dispatch(LoadPhotos({ page: this.currentPage }));
  }

  onScroll() {
    const element = this.scrollContainer.nativeElement;
    const threshold = 150;

    this.loading$.pipe(take(1)).subscribe((loading) => {
      if (
        !loading &&
        element.scrollTop + element.clientHeight >=
          element.scrollHeight - threshold
      ) {
        this.currentPage++;
        this.store.dispatch(LoadPhotos({ page: this.currentPage }));
      }
    });
  }

  trackByPhoto(index: number, photoUrl: string): string {
    return photoUrl;
  }

  addToFavorites(photoUrl: any) {
    this.store.dispatch(AddToFavorites({ photoUrl }));
  }
}
