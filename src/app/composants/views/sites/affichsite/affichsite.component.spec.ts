import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichsiteComponent } from './affichsite.component';

describe('AffichsiteComponent', () => {
  let component: AffichsiteComponent;
  let fixture: ComponentFixture<AffichsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
