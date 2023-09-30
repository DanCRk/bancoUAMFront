import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamosactivosComponent } from './prestamosactivos.component';

describe('PrestamosactivosComponent', () => {
  let component: PrestamosactivosComponent;
  let fixture: ComponentFixture<PrestamosactivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrestamosactivosComponent]
    });
    fixture = TestBed.createComponent(PrestamosactivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
