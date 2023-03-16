import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichuserComponent } from './affichuser.component';

describe('AffichuserComponent', () => {
  let component: AffichuserComponent;
  let fixture: ComponentFixture<AffichuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
