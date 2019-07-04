import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverdueDetailPage } from './overdue-detail.page';

describe('OverdueDetailPage', () => {
  let component: OverdueDetailPage;
  let fixture: ComponentFixture<OverdueDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverdueDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverdueDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
