import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListretardComponent } from './listretard.component';

describe('ListretardComponent', () => {
  let component: ListretardComponent;
  let fixture: ComponentFixture<ListretardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListretardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListretardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
