import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichdispositifComponent } from './affichdispositif.component';

describe('AffichdispositifComponent', () => {
  let component: AffichdispositifComponent;
  let fixture: ComponentFixture<AffichdispositifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichdispositifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichdispositifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
