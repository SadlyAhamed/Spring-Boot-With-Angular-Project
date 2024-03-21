import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverymanDashBoardComponent } from './deliveryman-dash-board.component';

describe('DeliverymanDashBoardComponent', () => {
  let component: DeliverymanDashBoardComponent;
  let fixture: ComponentFixture<DeliverymanDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverymanDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverymanDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
