import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EwaatiComponent } from './ewaati.component';

describe('EwaatiComponent', () => {
  let component: EwaatiComponent;
  let fixture: ComponentFixture<EwaatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EwaatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EwaatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
