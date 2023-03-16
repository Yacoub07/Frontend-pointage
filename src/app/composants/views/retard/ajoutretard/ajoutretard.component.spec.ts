import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutretardComponent } from './ajoutretard.component';

describe('AjoutretardComponent', () => {
  let component: AjoutretardComponent;
  let fixture: ComponentFixture<AjoutretardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutretardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutretardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
