import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconserviceComponent } from './iconservice.component';

describe('IconserviceComponent', () => {
  let component: IconserviceComponent;
  let fixture: ComponentFixture<IconserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
