import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimularCompraComponent } from './simular-compra.component';

describe('SimularCompraComponent', () => {
  let component: SimularCompraComponent;
  let fixture: ComponentFixture<SimularCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimularCompraComponent]
    });
    fixture = TestBed.createComponent(SimularCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
