import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestserviceComponent } from './gestservice.component';

describe('GestserviceComponent', () => {
  let component: GestserviceComponent;
  let fixture: ComponentFixture<GestserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
