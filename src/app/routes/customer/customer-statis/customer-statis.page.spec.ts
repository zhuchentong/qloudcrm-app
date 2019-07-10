import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerStatisPage } from './customer-statis.page';

describe('CustomerStatisPage', () => {
  let component: CustomerStatisPage;
  let fixture: ComponentFixture<CustomerStatisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerStatisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerStatisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
