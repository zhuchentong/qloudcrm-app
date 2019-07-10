const controller = 'userController'

export const userController = {
  getUserInfo: {
    controller,
    action: 'getUserInfo',
    method: 'GET'
  },
  userLogin: {
    controller,
    action: 'userLogin',
    method: 'POST'
  },
  getUserFocus: {
    controller,
    action: 'getUserFocus',
    method: 'GET'
  }
}
