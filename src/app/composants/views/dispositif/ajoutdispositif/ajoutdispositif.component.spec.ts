import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutdispositifComponent } from './ajoutdispositif.component';

describe('AjoutdispositifComponent', () => {
  let component: AjoutdispositifComponent;
  let fixture: ComponentFixture<AjoutdispositifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutdispositifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutdispositifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
