import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconemplComponent } from './iconempl.component';

describe('IconemplComponent', () => {
  let component: IconemplComponent;
  let fixture: ComponentFixture<IconemplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconemplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconemplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
