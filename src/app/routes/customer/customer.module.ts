import { NgModule } from '@angular/core'
import { CustomerListPage } from './customer-list/customer-list.page'
import { CustomerDetailPage } from './customer-detail/customer-detail.page'
import { SharedModule } from 'app/shared/shared.module'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    component: CustomerListPage
  }
]

const PAGES = [CustomerListPage, CustomerDetailPage]
@NgModule({
  declarations: [...PAGES],
  imports: [SharedModule, RouterModule.forChild(routes)]
})
export class CustomerPageModule {}
