import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichcongeComponent } from './affichconge.component';

describe('AffichcongeComponent', () => {
  let component: AffichcongeComponent;
  let fixture: ComponentFixture<AffichcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichcongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
