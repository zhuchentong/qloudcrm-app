export enum CommonState {
  ENABLED = 'ENABLED',
  DISABLED = 'DISABLED'
}

export enum SexState {
  FAMALE = 'FAMALE',
  MALE = 'MALE'
}

export enum DictType {
  CommonState = 'CommonState',
  SexState = 'SexState',
  MessageType = 'MessageType',
  FocusType = 'FocusType'
}

export enum MessageType {
  INNERNEWS = 'INNER-NEWS',
  OUTERNEWS = 'OUTER-NEWS',
  RISKMSG = 'RISK-MSG',
  MARKETINGMSG = ' MARKETING-MSG',
  CUSTOMERMSG = 'CUSTOMER-MSG',
  WORKMSG = ' WORK-MSG'
}

export enum FocusType {
  ACTIVE = 'FOCUS-ACTIVE',
  CUSTOMER = 'FOCUS-CUSTOMER',
  PRODUCT = 'FOCUS-PRODUCT',
  CHANNEL = 'FOCUS-CHANNEL',
  INCIDENT = 'FOCUS-INCIDENT'
}
