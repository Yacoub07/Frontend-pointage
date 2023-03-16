import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichmissionComponent } from './affichmission.component';

describe('AffichmissionComponent', () => {
  let component: AffichmissionComponent;
  let fixture: ComponentFixture<AffichmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
