import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagarTarjetaComponent } from './pagar-tarjeta.component';

describe('PagarTarjetaComponent', () => {
  let component: PagarTarjetaComponent;
  let fixture: ComponentFixture<PagarTarjetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagarTarjetaComponent]
    });
    fixture = TestBed.createComponent(PagarTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
