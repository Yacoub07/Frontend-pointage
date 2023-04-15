import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilpaysComponent } from './accueilpays.component';

describe('AccueilpaysComponent', () => {
  let component: AccueilpaysComponent;
  let fixture: ComponentFixture<AccueilpaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilpaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilpaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
