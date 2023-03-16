import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutsuperadminComponent } from './ajoutsuperadmin.component';

describe('AjoutsuperadminComponent', () => {
  let component: AjoutsuperadminComponent;
  let fixture: ComponentFixture<AjoutsuperadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutsuperadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutsuperadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
