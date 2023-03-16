import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichserviceComponent } from './affichservice.component';

describe('AffichserviceComponent', () => {
  let component: AffichserviceComponent;
  let fixture: ComponentFixture<AffichserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
