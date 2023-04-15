import { TestBed } from '@angular/core/testing';

import { ServicequartierService } from './servicequartier.service';

describe('ServicequartierService', () => {
  let service: ServicequartierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicequartierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
