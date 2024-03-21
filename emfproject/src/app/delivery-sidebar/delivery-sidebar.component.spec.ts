import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverySidebarComponent } from './delivery-sidebar.component';

describe('DeliverySidebarComponent', () => {
  let component: DeliverySidebarComponent;
  let fixture: ComponentFixture<DeliverySidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverySidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
