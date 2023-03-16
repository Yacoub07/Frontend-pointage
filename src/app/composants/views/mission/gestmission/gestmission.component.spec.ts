import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestmissionComponent } from './gestmission.component';

describe('GestmissionComponent', () => {
  let component: GestmissionComponent;
  let fixture: ComponentFixture<GestmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
