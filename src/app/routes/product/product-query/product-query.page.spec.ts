import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ProductQueryPage } from './product-query.page'

describe('ProductQueryPage', () => {
  let component: ProductQueryPage
  let fixture: ComponentFixture<ProductQueryPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductQueryPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductQueryPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
