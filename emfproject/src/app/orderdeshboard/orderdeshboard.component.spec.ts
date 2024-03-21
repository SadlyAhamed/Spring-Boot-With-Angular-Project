import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdeshboardComponent } from './orderdeshboard.component';

describe('OrderdeshboardComponent', () => {
  let component: OrderdeshboardComponent;
  let fixture: ComponentFixture<OrderdeshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderdeshboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderdeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
