import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestquartierComponent } from './gestquartier.component';

describe('GestquartierComponent', () => {
  let component: GestquartierComponent;
  let fixture: ComponentFixture<GestquartierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestquartierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestquartierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
