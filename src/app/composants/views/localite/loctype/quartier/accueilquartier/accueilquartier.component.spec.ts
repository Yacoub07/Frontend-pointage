import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilquartierComponent } from './accueilquartier.component';

describe('AccueilquartierComponent', () => {
  let component: AccueilquartierComponent;
  let fixture: ComponentFixture<AccueilquartierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilquartierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilquartierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
