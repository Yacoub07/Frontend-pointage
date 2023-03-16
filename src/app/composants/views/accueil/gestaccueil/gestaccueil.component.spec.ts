import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaccueilComponent } from './gestaccueil.component';

describe('GestaccueilComponent', () => {
  let component: GestaccueilComponent;
  let fixture: ComponentFixture<GestaccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaccueilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
