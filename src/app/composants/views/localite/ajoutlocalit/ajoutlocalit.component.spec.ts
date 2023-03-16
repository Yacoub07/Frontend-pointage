import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutlocalitComponent } from './ajoutlocalit.component';

describe('AjoutlocalitComponent', () => {
  let component: AjoutlocalitComponent;
  let fixture: ComponentFixture<AjoutlocalitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutlocalitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutlocalitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
