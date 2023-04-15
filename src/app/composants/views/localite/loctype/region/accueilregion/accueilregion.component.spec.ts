import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilregionComponent } from './accueilregion.component';

describe('AccueilregionComponent', () => {
  let component: AccueilregionComponent;
  let fixture: ComponentFixture<AccueilregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilregionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
