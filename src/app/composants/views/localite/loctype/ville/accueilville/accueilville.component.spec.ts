import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilvilleComponent } from './accueilville.component';

describe('AccueilvilleComponent', () => {
  let component: AccueilvilleComponent;
  let fixture: ComponentFixture<AccueilvilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilvilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilvilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
