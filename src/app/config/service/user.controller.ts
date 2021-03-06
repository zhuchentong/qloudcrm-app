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
  },
  getUserSchedule: {
    controller,
    action: 'getUserSchedule',
    method: 'GET'
  },
  createUserSchedule: {
    controller,
    action: 'createUserSchedule',
    method: 'POST'
  },
  scheduleByID: {
    controller,
    action: 'ScheduleByID',
    method: 'GET'
  }
}
