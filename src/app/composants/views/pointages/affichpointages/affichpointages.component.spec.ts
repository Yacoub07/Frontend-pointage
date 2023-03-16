import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichpointagesComponent } from './affichpointages.component';

describe('AffichpointagesComponent', () => {
  let component: AffichpointagesComponent;
  let fixture: ComponentFixture<AffichpointagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichpointagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichpointagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
