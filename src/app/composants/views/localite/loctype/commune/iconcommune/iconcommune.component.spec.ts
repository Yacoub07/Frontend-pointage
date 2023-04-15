import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconcommuneComponent } from './iconcommune.component';

describe('IconcommuneComponent', () => {
  let component: IconcommuneComponent;
  let fixture: ComponentFixture<IconcommuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconcommuneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconcommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
