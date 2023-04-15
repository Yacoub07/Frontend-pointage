import { TestBed } from '@angular/core/testing';

import { ServicevilleService } from './serviceville.service';

describe('ServicevilleService', () => {
  let service: ServicevilleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicevilleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
