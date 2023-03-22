import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListutilComponent } from './listutil.component';

describe('ListutilComponent', () => {
  let component: ListutilComponent;
  let fixture: ComponentFixture<ListutilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListutilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListutilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
