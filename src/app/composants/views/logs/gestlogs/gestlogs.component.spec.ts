import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestlogsComponent } from './gestlogs.component';

describe('GestlogsComponent', () => {
  let component: GestlogsComponent;
  let fixture: ComponentFixture<GestlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
