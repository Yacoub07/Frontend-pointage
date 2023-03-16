import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutpointagesComponent } from './ajoutpointages.component';

describe('AjoutpointagesComponent', () => {
  let component: AjoutpointagesComponent;
  let fixture: ComponentFixture<AjoutpointagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutpointagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutpointagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
