import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueillogsComponent } from './accueillogs.component';

describe('AccueillogsComponent', () => {
  let component: AccueillogsComponent;
  let fixture: ComponentFixture<AccueillogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueillogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueillogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
