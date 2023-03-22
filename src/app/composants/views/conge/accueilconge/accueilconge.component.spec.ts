import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilcongeComponent } from './accueilconge.component';

describe('AccueilcongeComponent', () => {
  let component: AccueilcongeComponent;
  let fixture: ComponentFixture<AccueilcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilcongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
