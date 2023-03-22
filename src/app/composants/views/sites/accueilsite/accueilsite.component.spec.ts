import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilsiteComponent } from './accueilsite.component';

describe('AccueilsiteComponent', () => {
  let component: AccueilsiteComponent;
  let fixture: ComponentFixture<AccueilsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
