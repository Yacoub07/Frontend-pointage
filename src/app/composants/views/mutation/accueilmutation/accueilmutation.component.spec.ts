import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilmutationComponent } from './accueilmutation.component';

describe('AccueilmutationComponent', () => {
  let component: AccueilmutationComponent;
  let fixture: ComponentFixture<AccueilmutationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilmutationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilmutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
