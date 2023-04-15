import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutcommuneComponent } from './ajoutcommune.component';

describe('AjoutcommuneComponent', () => {
  let component: AjoutcommuneComponent;
  let fixture: ComponentFixture<AjoutcommuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutcommuneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutcommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
