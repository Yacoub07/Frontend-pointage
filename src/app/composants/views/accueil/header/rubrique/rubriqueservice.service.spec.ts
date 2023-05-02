import { TestBed } from '@angular/core/testing';

import { RubriqueserviceService } from './rubriqueservice.service';

describe('RubriqueserviceService', () => {
  let service: RubriqueserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RubriqueserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
