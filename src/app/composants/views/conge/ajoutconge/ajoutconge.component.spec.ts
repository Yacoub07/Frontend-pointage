import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutcongeComponent } from './ajoutconge.component';

describe('AjoutcongeComponent', () => {
  let component: AjoutcongeComponent;
  let fixture: ComponentFixture<AjoutcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutcongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
