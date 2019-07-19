import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { CustomerDetailActivityPage } from './customer-detail-activity.page'

describe('CustomerDetailActivityPage', () => {
  let component: CustomerDetailActivityPage
  let fixture: ComponentFixture<CustomerDetailActivityPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerDetailActivityPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailActivityPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
