import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store and retrieve an object correctly into storage', () => {
    const testKey = 'test';
    const testValue = { name: 'Test', lastName: 'Test' };

    service.set(testKey, testValue);
    const result = service.get<typeof testValue>(testKey);

    expect(result).toEqual(testValue);
  });

  it('should return null for unknown key', () => {
    const result = service.get('unknownKey');
    expect(result).toBeNull();
  });
});
