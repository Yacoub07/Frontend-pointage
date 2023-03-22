import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupputilisateurComponent } from './supputilisateur.component';

describe('SupputilisateurComponent', () => {
  let component: SupputilisateurComponent;
  let fixture: ComponentFixture<SupputilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupputilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupputilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
