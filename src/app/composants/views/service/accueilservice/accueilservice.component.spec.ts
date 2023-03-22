import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilserviceComponent } from './accueilservice.component';

describe('AccueilserviceComponent', () => {
  let component: AccueilserviceComponent;
  let fixture: ComponentFixture<AccueilserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
