import { TestBed } from '@angular/core/testing';

import { RandomImageService } from './random-image.service';

describe('RandomImageService', () => {
  let service: RandomImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
