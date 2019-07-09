import { State, Action, StateContext, Selector } from '@ngxs/store'
import { LoginAction } from 'app/store/action/user.action'
import { ExtendState } from 'app/store/extend'
import { plainToClass, classToPlain } from 'class-transformer'
import { UserInfoModel } from 'app/model/user-info.model'

@State<any>({
  name: 'user',
  defaults: null
})
export class UserState extends ExtendState {
  /**
   * 获取当前登录用户
   */
  @Selector()
  public static getUser(state: UserInfoModel) {
    if (state) {
      return plainToClass(UserInfoModel, state)
    } else {
      return null
    }
  }

  @Action(LoginAction)
  public login<T>({ setState }: StateContext<any>, { user }: LoginAction) {
    setState(classToPlain(user))
  }
}
