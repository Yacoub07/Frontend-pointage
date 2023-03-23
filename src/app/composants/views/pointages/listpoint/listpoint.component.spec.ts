import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpointComponent } from './listpoint.component';

describe('ListpointComponent', () => {
  let component: ListpointComponent;
  let fixture: ComponentFixture<ListpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
