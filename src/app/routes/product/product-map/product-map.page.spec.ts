import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMapPage } from './product-map.page';

describe('ProductMapPage', () => {
  let component: ProductMapPage;
  let fixture: ComponentFixture<ProductMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
