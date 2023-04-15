import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiemplComponent } from './modiempl.component';

describe('ModiemplComponent', () => {
  let component: ModiemplComponent;
  let fixture: ComponentFixture<ModiemplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModiemplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModiemplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
