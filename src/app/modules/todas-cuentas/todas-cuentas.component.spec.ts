import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodasCuentasComponent } from './todas-cuentas.component';

describe('TodasCuentasComponent', () => {
  let component: TodasCuentasComponent;
  let fixture: ComponentFixture<TodasCuentasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodasCuentasComponent]
    });
    fixture = TestBed.createComponent(TodasCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
