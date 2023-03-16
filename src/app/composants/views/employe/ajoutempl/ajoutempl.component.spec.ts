import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutemplComponent } from './ajoutempl.component';

describe('AjoutemplComponent', () => {
  let component: AjoutemplComponent;
  let fixture: ComponentFixture<AjoutemplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutemplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutemplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
