import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestpointageComponent } from './gestpointage.component';

describe('GestpointageComponent', () => {
  let component: GestpointageComponent;
  let fixture: ComponentFixture<GestpointageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestpointageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestpointageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
