import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutquartierComponent } from './ajoutquartier.component';

describe('AjoutquartierComponent', () => {
  let component: AjoutquartierComponent;
  let fixture: ComponentFixture<AjoutquartierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutquartierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutquartierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
