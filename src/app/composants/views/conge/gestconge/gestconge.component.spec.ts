import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestcongeComponent } from './gestconge.component';

describe('GestcongeComponent', () => {
  let component: GestcongeComponent;
  let fixture: ComponentFixture<GestcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestcongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
