import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ProductRankPage } from './product-rank.page'

describe('ProductRankPage', () => {
  let component: ProductRankPage
  let fixture: ComponentFixture<ProductRankPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductRankPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRankPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
