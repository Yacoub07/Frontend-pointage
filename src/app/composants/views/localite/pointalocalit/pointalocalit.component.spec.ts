import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointalocalitComponent } from './pointalocalit.component';

describe('PointalocalitComponent', () => {
  let component: PointalocalitComponent;
  let fixture: ComponentFixture<PointalocalitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointalocalitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointalocalitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
