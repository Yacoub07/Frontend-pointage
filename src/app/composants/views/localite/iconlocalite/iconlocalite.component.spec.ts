import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconlocaliteComponent } from './iconlocalite.component';

describe('IconlocaliteComponent', () => {
  let component: IconlocaliteComponent;
  let fixture: ComponentFixture<IconlocaliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconlocaliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconlocaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
