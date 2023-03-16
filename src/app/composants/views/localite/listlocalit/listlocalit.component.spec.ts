import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlocalitComponent } from './listlocalit.component';

describe('ListlocalitComponent', () => {
  let component: ListlocalitComponent;
  let fixture: ComponentFixture<ListlocalitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListlocalitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListlocalitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
