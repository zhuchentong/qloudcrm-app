import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSearchPage } from './message-search.page';

describe('MessageSearchPage', () => {
  let component: MessageSearchPage;
  let fixture: ComponentFixture<MessageSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
