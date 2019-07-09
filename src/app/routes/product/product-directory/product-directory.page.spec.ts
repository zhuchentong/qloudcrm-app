import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ProductDirectoryPage } from './product-directory.page'

describe('ProductDirectoryPage', () => {
  let component: ProductDirectoryPage
  let fixture: ComponentFixture<ProductDirectoryPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDirectoryPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDirectoryPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
