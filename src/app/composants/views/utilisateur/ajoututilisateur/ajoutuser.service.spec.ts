import { TestBed } from '@angular/core/testing';

import { AjoutuserService } from './ajoutuser.service';

describe('AjoutuserService', () => {
  let service: AjoutuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
