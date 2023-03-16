import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestsiteComponent } from './gestsite.component';

describe('GestsiteComponent', () => {
  let component: GestsiteComponent;
  let fixture: ComponentFixture<GestsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
