import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichsuperadminComponent } from './affichsuperadmin.component';

describe('AffichsuperadminComponent', () => {
  let component: AffichsuperadminComponent;
  let fixture: ComponentFixture<AffichsuperadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichsuperadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichsuperadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
