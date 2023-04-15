import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointaregionComponent } from './pointaregion.component';

describe('PointaregionComponent', () => {
  let component: PointaregionComponent;
  let fixture: ComponentFixture<PointaregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointaregionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointaregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
