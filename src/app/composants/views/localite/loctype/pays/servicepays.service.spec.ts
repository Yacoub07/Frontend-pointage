import { TestBed } from '@angular/core/testing';

import { ServicepaysService } from './servicepays.service';

describe('ServicepaysService', () => {
  let service: ServicepaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicepaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
