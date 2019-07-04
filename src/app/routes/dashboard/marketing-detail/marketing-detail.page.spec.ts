import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingDetailPage } from './marketing-detail.page';

describe('MarketingDetailPage', () => {
  let component: MarketingDetailPage;
  let fixture: ComponentFixture<MarketingDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
