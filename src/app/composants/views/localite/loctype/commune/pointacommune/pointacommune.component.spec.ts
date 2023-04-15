import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointacommuneComponent } from './pointacommune.component';

describe('PointacommuneComponent', () => {
  let component: PointacommuneComponent;
  let fixture: ComponentFixture<PointacommuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointacommuneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointacommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
