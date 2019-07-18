import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UserPage } from './user.page'
import { SharedModule } from 'app/shared/shared.module'
import { UserFocusPage } from 'app/routes/user/user-focus/user-focus.page'
import { UserPerformPage } from 'app/routes/user/user-perform/user-perform.page'
import { UserSchedulePage } from 'app/routes/user/user-schedule/user-schedule.page'
import { UserSettingPage } from 'app/routes/user/user-setting/user-setting.page'
import { UserToolsPage } from 'app/routes/user/user-tools/user-tools.page'
import { UserService } from 'app/services/user.service'
import { LoginPage } from 'app/routes/user/login/login.page'
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FocusItemPage } from 'app/routes/user/user-focus/focus-item/focus-item.page'
import { NgCalendarModule } from 'ionic2-calendar'
import { DatePipe } from '@angular/common'

const routes: Routes = [
  {
    path: '',
    component: UserPage
  },
  {
    path: 'user-focus',
    component: UserFocusPage
  },
  {
    path: 'user-perform',
    component: UserPerformPage
  },
  {
    path: 'user-schedule',
    component: UserSchedulePage
  },
  {
    path: 'user-setting',
    component: UserSettingPage
  },
  {
    path: 'user-tools',
    component: UserToolsPage
  },
  {
    path: 'user-login',
    component: LoginPage
  }
]

@NgModule({
  imports: [
    SharedModule,
    NgCalendarModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    UserPage,
    UserFocusPage,
    UserPerformPage,
    UserSchedulePage,
    UserSettingPage,
    UserToolsPage,
    LoginPage,
    FocusItemPage
  ],
  providers: [UserService, DatePipe]
})
export class UserPageModule {}
