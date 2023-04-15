import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconlogsComponent } from './iconlogs.component';

describe('IconlogsComponent', () => {
  let component: IconlogsComponent;
  let fixture: ComponentFixture<IconlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
