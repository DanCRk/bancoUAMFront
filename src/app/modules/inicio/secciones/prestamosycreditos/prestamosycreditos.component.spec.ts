import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamosycreditosComponent } from './prestamosycreditos.component';

describe('PrestamosycreditosComponent', () => {
  let component: PrestamosycreditosComponent;
  let fixture: ComponentFixture<PrestamosycreditosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrestamosycreditosComponent]
    });
    fixture = TestBed.createComponent(PrestamosycreditosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
