import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceDetailPage } from './performance-detail.page';

describe('PerformanceDetailPage', () => {
  let component: PerformanceDetailPage;
  let fixture: ComponentFixture<PerformanceDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
