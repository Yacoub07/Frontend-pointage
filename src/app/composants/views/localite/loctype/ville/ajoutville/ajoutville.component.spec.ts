import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutvilleComponent } from './ajoutville.component';

describe('AjoutvilleComponent', () => {
  let component: AjoutvilleComponent;
  let fixture: ComponentFixture<AjoutvilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutvilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutvilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
