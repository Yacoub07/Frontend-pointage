import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueiluserComponent } from './accueiluser.component';

describe('AccueiluserComponent', () => {
  let component: AccueiluserComponent;
  let fixture: ComponentFixture<AccueiluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueiluserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueiluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
