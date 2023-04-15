import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconregionComponent } from './iconregion.component';

describe('IconregionComponent', () => {
  let component: IconregionComponent;
  let fixture: ComponentFixture<IconregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconregionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
