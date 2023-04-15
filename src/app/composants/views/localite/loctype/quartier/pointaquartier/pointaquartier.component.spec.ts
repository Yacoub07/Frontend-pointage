import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointaquartierComponent } from './pointaquartier.component';

describe('PointaquartierComponent', () => {
  let component: PointaquartierComponent;
  let fixture: ComponentFixture<PointaquartierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointaquartierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointaquartierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
