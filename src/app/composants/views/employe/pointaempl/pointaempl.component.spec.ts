import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointaemplComponent } from './pointaempl.component';

describe('PointaemplComponent', () => {
  let component: PointaemplComponent;
  let fixture: ComponentFixture<PointaemplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointaemplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointaemplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
