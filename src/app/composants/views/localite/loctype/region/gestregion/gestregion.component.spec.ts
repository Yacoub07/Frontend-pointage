import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestregionComponent } from './gestregion.component';

describe('GestregionComponent', () => {
  let component: GestregionComponent;
  let fixture: ComponentFixture<GestregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestregionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
