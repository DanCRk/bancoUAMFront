import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodastarjetascreditoComponent } from './todastarjetascredito.component';

describe('TodastarjetascreditoComponent', () => {
  let component: TodastarjetascreditoComponent;
  let fixture: ComponentFixture<TodastarjetascreditoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodastarjetascreditoComponent]
    });
    fixture = TestBed.createComponent(TodastarjetascreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
