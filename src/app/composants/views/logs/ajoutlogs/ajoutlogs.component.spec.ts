import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutlogsComponent } from './ajoutlogs.component';

describe('AjoutlogsComponent', () => {
  let component: AjoutlogsComponent;
  let fixture: ComponentFixture<AjoutlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
