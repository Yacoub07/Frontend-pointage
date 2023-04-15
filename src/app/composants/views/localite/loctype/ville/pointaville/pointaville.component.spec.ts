import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointavilleComponent } from './pointaville.component';

describe('PointavilleComponent', () => {
  let component: PointavilleComponent;
  let fixture: ComponentFixture<PointavilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointavilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointavilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
