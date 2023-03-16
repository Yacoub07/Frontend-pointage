import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichewaatiComponent } from './affichewaati.component';

describe('AffichewaatiComponent', () => {
  let component: AffichewaatiComponent;
  let fixture: ComponentFixture<AffichewaatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichewaatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichewaatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
