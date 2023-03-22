import { TestBed } from '@angular/core/testing';

import { AjoutuserInterceptor } from './ajoutuser.interceptor';

describe('AjoutuserInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AjoutuserInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AjoutuserInterceptor = TestBed.inject(AjoutuserInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
