import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutserviceComponent } from './ajoutservice.component';

describe('AjoutserviceComponent', () => {
  let component: AjoutserviceComponent;
  let fixture: ComponentFixture<AjoutserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
