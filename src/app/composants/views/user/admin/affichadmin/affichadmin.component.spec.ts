import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichadminComponent } from './affichadmin.component';

describe('AffichadminComponent', () => {
  let component: AffichadminComponent;
  let fixture: ComponentFixture<AffichadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
