import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestcommuneComponent } from './gestcommune.component';

describe('GestcommuneComponent', () => {
  let component: GestcommuneComponent;
  let fixture: ComponentFixture<GestcommuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestcommuneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestcommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
