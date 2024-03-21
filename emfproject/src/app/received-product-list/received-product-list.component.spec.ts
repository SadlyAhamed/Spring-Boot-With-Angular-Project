import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedProductListComponent } from './received-product-list.component';

describe('ReceivedProductListComponent', () => {
  let component: ReceivedProductListComponent;
  let fixture: ComponentFixture<ReceivedProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivedProductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivedProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
