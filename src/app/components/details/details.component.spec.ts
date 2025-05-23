import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { DetailsComponent } from './details.component';
import { of } from 'rxjs';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;

    component.favoritesFacade = {
      selectedPhotoUrl$: of('dummy-photo-url'),
    } as any;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have remove button present', () => {
    const button = fixture.nativeElement.querySelector('.remove-button');
    expect(button).toBeTruthy();
  });

  it('should have only 1 remove button', () => {
    const buttons = fixture.nativeElement.querySelectorAll('.remove-button');
    expect(buttons.length).toBe(1);
  });

  it('should render the image with correct src', () => {
    const img: HTMLImageElement = fixture.nativeElement.querySelector(
      'img.fullscreen-photo'
    );

    expect(img).toBeTruthy();
    expect(img.src).toContain('dummy-photo-url');
  });

  it('should call removeFromFavorites with the photo URL on button click', () => {
    spyOn(component, 'removeFromFavorites');

    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('.remove-button');
    button.click();

    expect(component.removeFromFavorites).toHaveBeenCalledWith(
      'dummy-photo-url'
    );
  });
});
