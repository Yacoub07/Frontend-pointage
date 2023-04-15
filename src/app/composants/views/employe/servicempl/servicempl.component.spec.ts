import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicemplComponent } from './servicempl.component';

describe('ServicemplComponent', () => {
  let component: ServicemplComponent;
  let fixture: ComponentFixture<ServicemplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicemplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicemplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
