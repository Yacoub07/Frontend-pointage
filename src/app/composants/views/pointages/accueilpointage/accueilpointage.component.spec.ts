import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilpointageComponent } from './accueilpointage.component';

describe('AccueilpointageComponent', () => {
  let component: AccueilpointageComponent;
  let fixture: ComponentFixture<AccueilpointageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilpointageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilpointageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
