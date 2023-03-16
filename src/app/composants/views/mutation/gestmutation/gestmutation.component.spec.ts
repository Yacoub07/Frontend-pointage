import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestmutationComponent } from './gestmutation.component';

describe('GestmutationComponent', () => {
  let component: GestmutationComponent;
  let fixture: ComponentFixture<GestmutationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestmutationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestmutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
