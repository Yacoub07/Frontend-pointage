import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppemplComponent } from './suppempl.component';

describe('SuppemplComponent', () => {
  let component: SuppemplComponent;
  let fixture: ComponentFixture<SuppemplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppemplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppemplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
