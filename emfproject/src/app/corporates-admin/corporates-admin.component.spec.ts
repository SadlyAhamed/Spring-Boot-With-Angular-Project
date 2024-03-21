import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatesAdminComponent } from './corporates-admin.component';

describe('CorporatesAdminComponent', () => {
  let component: CorporatesAdminComponent;
  let fixture: ComponentFixture<CorporatesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporatesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporatesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
