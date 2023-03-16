import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmutationComponent } from './listmutation.component';

describe('ListmutationComponent', () => {
  let component: ListmutationComponent;
  let fixture: ComponentFixture<ListmutationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListmutationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListmutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
