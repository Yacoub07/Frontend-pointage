import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutmissionComponent } from './ajoutmission.component';

describe('AjoutmissionComponent', () => {
  let component: AjoutmissionComponent;
  let fixture: ComponentFixture<AjoutmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
