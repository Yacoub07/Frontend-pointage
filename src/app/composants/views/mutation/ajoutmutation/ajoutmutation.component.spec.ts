import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutmutationComponent } from './ajoutmutation.component';

describe('AjoutmutationComponent', () => {
  let component: AjoutmutationComponent;
  let fixture: ComponentFixture<AjoutmutationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutmutationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutmutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
