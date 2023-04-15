import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestvilleComponent } from './gestville.component';

describe('GestvilleComponent', () => {
  let component: GestvilleComponent;
  let fixture: ComponentFixture<GestvilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestvilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestvilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
