import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointapaysComponent } from './pointapays.component';

describe('PointapaysComponent', () => {
  let component: PointapaysComponent;
  let fixture: ComponentFixture<PointapaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointapaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointapaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
