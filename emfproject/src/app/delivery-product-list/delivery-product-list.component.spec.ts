import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryProductListComponent } from './delivery-product-list.component';

describe('DeliveryProductListComponent', () => {
  let component: DeliveryProductListComponent;
  let fixture: ComponentFixture<DeliveryProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryProductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
