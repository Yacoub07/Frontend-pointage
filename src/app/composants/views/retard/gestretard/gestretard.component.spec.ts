import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestretardComponent } from './gestretard.component';

describe('GestretardComponent', () => {
  let component: GestretardComponent;
  let fixture: ComponentFixture<GestretardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestretardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestretardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
