import { TestBed } from '@angular/core/testing';

import { ServicelogsService } from './servicelogs.service';

describe('ServicelogsService', () => {
  let service: ServicelogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicelogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
