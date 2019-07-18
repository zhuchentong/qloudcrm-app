import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageStatusPage } from './message-status.page';

describe('MessageStatusPage', () => {
  let component: MessageStatusPage;
  let fixture: ComponentFixture<MessageStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageStatusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
