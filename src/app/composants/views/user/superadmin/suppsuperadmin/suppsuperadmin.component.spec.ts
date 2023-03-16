import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppsuperadminComponent } from './suppsuperadmin.component';

describe('SuppsuperadminComponent', () => {
  let component: SuppsuperadminComponent;
  let fixture: ComponentFixture<SuppsuperadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppsuperadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppsuperadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
