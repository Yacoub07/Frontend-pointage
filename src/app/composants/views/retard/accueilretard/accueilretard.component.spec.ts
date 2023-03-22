import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilretardComponent } from './accueilretard.component';

describe('AccueilretardComponent', () => {
  let component: AccueilretardComponent;
  let fixture: ComponentFixture<AccueilretardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilretardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilretardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
