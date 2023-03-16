import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutewaatiComponent } from './ajoutewaati.component';

describe('AjoutewaatiComponent', () => {
  let component: AjoutewaatiComponent;
  let fixture: ComponentFixture<AjoutewaatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutewaatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutewaatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
