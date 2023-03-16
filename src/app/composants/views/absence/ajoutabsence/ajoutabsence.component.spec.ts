import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutabsenceComponent } from './ajoutabsence.component';

describe('AjoutabsenceComponent', () => {
  let component: AjoutabsenceComponent;
  let fixture: ComponentFixture<AjoutabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutabsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
