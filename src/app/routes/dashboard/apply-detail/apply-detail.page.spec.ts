import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyDetailPage } from './apply-detail.page';

describe('ApplyDetailPage', () => {
  let component: ApplyDetailPage;
  let fixture: ComponentFixture<ApplyDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
