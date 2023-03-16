import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestlocalitComponent } from './gestlocalit.component';

describe('GestlocalitComponent', () => {
  let component: GestlocalitComponent;
  let fixture: ComponentFixture<GestlocalitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestlocalitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestlocalitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
