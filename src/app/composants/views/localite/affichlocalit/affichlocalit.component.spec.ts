import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichlocalitComponent } from './affichlocalit.component';

describe('AffichlocalitComponent', () => {
  let component: AffichlocalitComponent;
  let fixture: ComponentFixture<AffichlocalitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichlocalitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichlocalitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
