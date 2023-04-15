import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilcommuneComponent } from './accueilcommune.component';

describe('AccueilcommuneComponent', () => {
  let component: AccueilcommuneComponent;
  let fixture: ComponentFixture<AccueilcommuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilcommuneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilcommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
