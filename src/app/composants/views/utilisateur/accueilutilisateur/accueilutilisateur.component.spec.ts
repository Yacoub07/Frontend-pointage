import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilutilisateurComponent } from './accueilutilisateur.component';

describe('AccueilutilisateurComponent', () => {
  let component: AccueilutilisateurComponent;
  let fixture: ComponentFixture<AccueilutilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilutilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
