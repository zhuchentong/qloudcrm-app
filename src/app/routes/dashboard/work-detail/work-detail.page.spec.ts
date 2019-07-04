import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDetailPage } from './work-detail.page';

describe('WorkDetailPage', () => {
  let component: WorkDetailPage;
  let fixture: ComponentFixture<WorkDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
