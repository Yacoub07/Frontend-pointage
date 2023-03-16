import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignadminComponent } from './consignadmin.component';

describe('ConsignadminComponent', () => {
  let component: ConsignadminComponent;
  let fixture: ComponentFixture<ConsignadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsignadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsignadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
