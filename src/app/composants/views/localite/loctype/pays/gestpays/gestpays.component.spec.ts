import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestpaysComponent } from './gestpays.component';

describe('GestpaysComponent', () => {
  let component: GestpaysComponent;
  let fixture: ComponentFixture<GestpaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestpaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestpaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
