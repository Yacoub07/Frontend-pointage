import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilabsenceComponent } from './accueilabsence.component';

describe('AccueilabsenceComponent', () => {
  let component: AccueilabsenceComponent;
  let fixture: ComponentFixture<AccueilabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilabsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
