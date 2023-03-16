import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichmutationComponent } from './affichmutation.component';

describe('AffichmutationComponent', () => {
  let component: AffichmutationComponent;
  let fixture: ComponentFixture<AffichmutationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichmutationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichmutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
