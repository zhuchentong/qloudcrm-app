import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageNumberPage } from './message-number.page';

describe('MessageNumberPage', () => {
  let component: MessageNumberPage;
  let fixture: ComponentFixture<MessageNumberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageNumberPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageNumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
