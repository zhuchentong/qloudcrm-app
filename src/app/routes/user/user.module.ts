import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UserPage } from './user.page'
import { SharedModule } from 'app/shared/shared.module'

const routes: Routes = [
  {
    path: '',
    component: UserPage
  }
]

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [UserPage]
})
export class UserPageModule {}
