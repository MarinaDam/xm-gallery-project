import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritesComponent } from './favorites.component';
import { LoadFavoritesFromStorage } from 'src/app/store/actions/favorites.actions';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;
  let store: MockStore;
  let dispatchSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesComponent],
      providers: [provideMockStore()],
      imports: [MatFormFieldModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;

    store = TestBed.inject(MockStore);
    dispatchSpy = spyOn(store, 'dispatch');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch LoadPhotos on init', () => {
    expect(dispatchSpy).toHaveBeenCalledWith(LoadFavoritesFromStorage());
  });

  it('should show empty message when showEmptyFavoritesMessage is true', () => {
    component.facade = {
      showEmptyFavoritesMessage$: of(true),
      emptyFavoritesMessage$: of('No favorites yet.'),
    } as any;

    fixture.detectChanges();

    const text = fixture.nativeElement.querySelector('mat-label');
    expect(text).toBeTruthy();
    expect(text.textContent).toContain('No favorites yet.');
  });

  it('should render favorite photos', () => {
    component.photosFacade = {
      favoritePhotos$: of([
        'https://example.com/photos/id/1',
        'https://example.com/photos/id/2',
      ]),
    } as any;

    fixture.detectChanges();

    const cards = fixture.nativeElement.querySelectorAll('.photo-card');
    expect(cards.length).toBe(2);
  });
});
