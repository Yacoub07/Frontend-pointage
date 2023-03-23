import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointaserviceComponent } from './pointaservice.component';

describe('PointaserviceComponent', () => {
  let component: PointaserviceComponent;
  let fixture: ComponentFixture<PointaserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointaserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointaserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
