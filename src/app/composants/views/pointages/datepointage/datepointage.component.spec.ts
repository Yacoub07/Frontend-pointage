import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepointageComponent } from './datepointage.component';

describe('DatepointageComponent', () => {
  let component: DatepointageComponent;
  let fixture: ComponentFixture<DatepointageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepointageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepointageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
