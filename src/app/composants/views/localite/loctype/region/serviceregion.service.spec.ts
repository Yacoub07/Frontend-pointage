import { TestBed } from '@angular/core/testing';

import { ServiceregionService } from './serviceregion.service';

describe('ServiceregionService', () => {
  let service: ServiceregionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceregionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
