import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarTarjetaComponent } from './solicitar-tarjeta.component';

describe('SolicitarTarjetaComponent', () => {
  let component: SolicitarTarjetaComponent;
  let fixture: ComponentFixture<SolicitarTarjetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitarTarjetaComponent]
    });
    fixture = TestBed.createComponent(SolicitarTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
