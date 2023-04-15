import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconpaysComponent } from './iconpays.component';

describe('IconpaysComponent', () => {
  let component: IconpaysComponent;
  let fixture: ComponentFixture<IconpaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconpaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconpaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
