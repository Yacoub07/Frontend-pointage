import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichemplComponent } from './affichempl.component';

describe('AffichemplComponent', () => {
  let component: AffichemplComponent;
  let fixture: ComponentFixture<AffichemplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichemplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichemplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
