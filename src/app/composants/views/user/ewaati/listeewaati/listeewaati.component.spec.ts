import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeewaatiComponent } from './listeewaati.component';

describe('ListeewaatiComponent', () => {
  let component: ListeewaatiComponent;
  let fixture: ComponentFixture<ListeewaatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeewaatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeewaatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
