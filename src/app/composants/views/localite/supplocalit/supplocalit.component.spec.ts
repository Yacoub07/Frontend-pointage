import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplocalitComponent } from './supplocalit.component';

describe('SupplocalitComponent', () => {
  let component: SupplocalitComponent;
  let fixture: ComponentFixture<SupplocalitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplocalitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplocalitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
