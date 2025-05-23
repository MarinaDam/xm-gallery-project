import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AddToFavorites, LoadPhotos } from 'src/app/store/actions/photos.actions';
import { PhotosComponent } from './photos.component';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;
  let store: MockStore;
  let dispatchSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotosComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;

    store = TestBed.inject(MockStore);
    dispatchSpy = spyOn(store, 'dispatch');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch LoadPhotos on init', () => {
    expect(dispatchSpy).toHaveBeenCalledWith(LoadPhotos({ page: 0 }));
  });

  it('trackByPhoto should return photo URL', () => {
    const index = 0;
    const photoUrl = 'https://example.com/photo.jpg';
    const result = component.trackByPhoto(index, photoUrl);
    expect(result).toBe(photoUrl);
  });

  it('addToFavorites should dispatch AddToFavorites action', () => {
    const photoUrl = 'https://example.com/photo.jpg';
    component.addToFavorites(photoUrl);
    expect(dispatchSpy).toHaveBeenCalledWith(AddToFavorites({ photoUrl }));
  });
});
