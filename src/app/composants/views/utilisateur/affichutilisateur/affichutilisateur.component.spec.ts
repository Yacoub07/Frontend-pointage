import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichutilisateurComponent } from './affichutilisateur.component';

describe('AffichutilisateurComponent', () => {
  let component: AffichutilisateurComponent;
  let fixture: ComponentFixture<AffichutilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichutilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
