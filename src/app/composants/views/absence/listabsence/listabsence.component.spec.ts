import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListabsenceComponent } from './listabsence.component';

describe('ListabsenceComponent', () => {
  let component: ListabsenceComponent;
  let fixture: ComponentFixture<ListabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListabsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
