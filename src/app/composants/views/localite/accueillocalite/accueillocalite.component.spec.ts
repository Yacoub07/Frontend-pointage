import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueillocaliteComponent } from './accueillocalite.component';

describe('AccueillocaliteComponent', () => {
  let component: AccueillocaliteComponent;
  let fixture: ComponentFixture<AccueillocaliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueillocaliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueillocaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
