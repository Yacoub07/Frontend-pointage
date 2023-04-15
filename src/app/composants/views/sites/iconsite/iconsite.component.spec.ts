import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsiteComponent } from './iconsite.component';

describe('IconsiteComponent', () => {
  let component: IconsiteComponent;
  let fixture: ComponentFixture<IconsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
