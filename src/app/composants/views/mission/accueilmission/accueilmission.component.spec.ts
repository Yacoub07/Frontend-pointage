import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilmissionComponent } from './accueilmission.component';

describe('AccueilmissionComponent', () => {
  let component: AccueilmissionComponent;
  let fixture: ComponentFixture<AccueilmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
