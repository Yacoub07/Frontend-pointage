import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconquartierComponent } from './iconquartier.component';

describe('IconquartierComponent', () => {
  let component: IconquartierComponent;
  let fixture: ComponentFixture<IconquartierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconquartierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconquartierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
