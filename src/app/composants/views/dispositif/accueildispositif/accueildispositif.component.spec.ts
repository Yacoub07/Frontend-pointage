import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueildispositifComponent } from './accueildispositif.component';

describe('AccueildispositifComponent', () => {
  let component: AccueildispositifComponent;
  let fixture: ComponentFixture<AccueildispositifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueildispositifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueildispositifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
