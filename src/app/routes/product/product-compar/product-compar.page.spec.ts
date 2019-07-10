import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComparPage } from './product-compar.page';

describe('ProductComparPage', () => {
  let component: ProductComparPage;
  let fixture: ComponentFixture<ProductComparPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComparPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComparPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
