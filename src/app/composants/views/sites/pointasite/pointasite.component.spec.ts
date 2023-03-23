import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointasiteComponent } from './pointasite.component';

describe('PointasiteComponent', () => {
  let component: PointasiteComponent;
  let fixture: ComponentFixture<PointasiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointasiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointasiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
