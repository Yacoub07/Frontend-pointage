import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichretardComponent } from './affichretard.component';

describe('AffichretardComponent', () => {
  let component: AffichretardComponent;
  let fixture: ComponentFixture<AffichretardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichretardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichretardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
