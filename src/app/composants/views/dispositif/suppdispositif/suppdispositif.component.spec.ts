import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppdispositifComponent } from './suppdispositif.component';

describe('SuppdispositifComponent', () => {
  let component: SuppdispositifComponent;
  let fixture: ComponentFixture<SuppdispositifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppdispositifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppdispositifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
