import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaasociadaComponent } from './tarjetaasociada.component';

describe('TarjetaasociadaComponent', () => {
  let component: TarjetaasociadaComponent;
  let fixture: ComponentFixture<TarjetaasociadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetaasociadaComponent]
    });
    fixture = TestBed.createComponent(TarjetaasociadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
