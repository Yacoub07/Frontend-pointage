import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppewaatiComponent } from './suppewaati.component';

describe('SuppewaatiComponent', () => {
  let component: SuppewaatiComponent;
  let fixture: ComponentFixture<SuppewaatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppewaatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppewaatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
