import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestabsenceComponent } from './gestabsence.component';

describe('GestabsenceComponent', () => {
  let component: GestabsenceComponent;
  let fixture: ComponentFixture<GestabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestabsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
