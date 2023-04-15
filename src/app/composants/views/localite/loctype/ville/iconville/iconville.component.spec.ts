import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconvilleComponent } from './iconville.component';

describe('IconvilleComponent', () => {
  let component: IconvilleComponent;
  let fixture: ComponentFixture<IconvilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconvilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconvilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
