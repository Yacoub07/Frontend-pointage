import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichabsenceComponent } from './affichabsence.component';

describe('AffichabsenceComponent', () => {
  let component: AffichabsenceComponent;
  let fixture: ComponentFixture<AffichabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichabsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
