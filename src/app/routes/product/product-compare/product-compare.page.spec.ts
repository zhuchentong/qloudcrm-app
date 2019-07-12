import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComparePage } from './product-compare.page';

describe('ProductComparePage', () => {
  let component: ProductComparePage;
  let fixture: ComponentFixture<ProductComparePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComparePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComparePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
