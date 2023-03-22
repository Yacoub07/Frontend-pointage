import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilemployeComponent } from './accueilemploye.component';

describe('AccueilemployeComponent', () => {
  let component: AccueilemployeComponent;
  let fixture: ComponentFixture<AccueilemployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilemployeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilemployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
