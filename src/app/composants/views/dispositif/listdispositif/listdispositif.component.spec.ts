import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdispositifComponent } from './listdispositif.component';

describe('ListdispositifComponent', () => {
  let component: ListdispositifComponent;
  let fixture: ComponentFixture<ListdispositifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdispositifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListdispositifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
