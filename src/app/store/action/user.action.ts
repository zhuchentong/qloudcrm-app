export class LoginAction {
  public static readonly type = '[User] UserLogin'
  constructor(public user) {}
}

export class LogoutAction {
  public static readonly type = '[User] UserLogout'
  constructor() {}
}
