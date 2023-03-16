import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestemplComponent } from './gestempl.component';

describe('GestemplComponent', () => {
  let component: GestemplComponent;
  let fixture: ComponentFixture<GestemplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestemplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestemplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
