import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormserviceComponent } from './formservice.component';

describe('FormserviceComponent', () => {
  let component: FormserviceComponent;
  let fixture: ComponentFixture<FormserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
