import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointadispositifComponent } from './pointadispositif.component';

describe('PointadispositifComponent', () => {
  let component: PointadispositifComponent;
  let fixture: ComponentFixture<PointadispositifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointadispositifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointadispositifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
