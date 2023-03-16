import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestdispositifComponent } from './gestdispositif.component';

describe('GestdispositifComponent', () => {
  let component: GestdispositifComponent;
  let fixture: ComponentFixture<GestdispositifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestdispositifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestdispositifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
