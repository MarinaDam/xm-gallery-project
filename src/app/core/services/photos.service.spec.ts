import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { PhotosService } from './photos.service';

describe('PhotosService', () => {
  let service: PhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 12 photo URLS for the given page', fakeAsync(() => {
    let result: string[] = [];

    service.getPhotos(1).subscribe((photos) => {
      result = photos;
    });

    tick(300);
    expect(result.length).toBe(12);
    expect(result[0]).toContain('https://picsum.photos/id/');
  }));

  it('should return multiple photo URLs from picsum.photos domain', fakeAsync(() => {
    let result: string[] = [];

    service.getPhotos(3).subscribe((photos) => {
      result = photos;
    });

    tick(300);

    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toContain('https://picsum.photos/');
  }));
});
