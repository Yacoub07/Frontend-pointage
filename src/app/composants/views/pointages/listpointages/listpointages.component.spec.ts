import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpointagesComponent } from './listpointages.component';

describe('ListpointagesComponent', () => {
  let component: ListpointagesComponent;
  let fixture: ComponentFixture<ListpointagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpointagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListpointagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
