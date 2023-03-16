import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppserviceComponent } from './suppservice.component';

describe('SuppserviceComponent', () => {
  let component: SuppserviceComponent;
  let fixture: ComponentFixture<SuppserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
