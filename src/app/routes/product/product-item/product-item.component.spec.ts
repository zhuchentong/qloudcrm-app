import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ProductItemComponent } from './product-item.component'

describe('ProductItemComponent', () => {
  let component: ProductItemComponent
  let fixture: ComponentFixture<ProductItemComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductItemComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
