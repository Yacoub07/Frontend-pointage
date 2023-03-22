import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconrechutilisateurComponent } from './iconrechutilisateur.component';

describe('IconrechutilisateurComponent', () => {
  let component: IconrechutilisateurComponent;
  let fixture: ComponentFixture<IconrechutilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconrechutilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconrechutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
