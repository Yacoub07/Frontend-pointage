import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsuperadminComponent } from './listsuperadmin.component';

describe('ListsuperadminComponent', () => {
  let component: ListsuperadminComponent;
  let fixture: ComponentFixture<ListsuperadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsuperadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsuperadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
