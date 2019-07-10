import { NgModule } from '@angular/core'
import { CustomerListPage } from './customer-list/customer-list.page'
import { CustomerDetailPage } from './customer-detail/customer-detail.page'
import { SharedModule } from 'app/shared/shared.module'
import { RouterModule, Routes } from '@angular/router'
import { CustomerItemComponent } from './customer-item/customer-item.component'
import { CustomerQueryPage } from './customer-query/customer-query.page'
import { CustomerGroupPage } from './customer-group/customer-group.page'
import { CustomerHistoryPage } from './customer-history/customer-history.page'
import { CustomerStatisPage } from './customer-statis/customer-statis.page'
import { CustomerDepqueryPage } from './customer-depquery/customer-depquery.page'

const routes: Routes = [
  {
    path: '',
    component: CustomerListPage
  },
  {
    path: 'customer-query',
    component: CustomerQueryPage
  },
  {
    path: 'customer-group',
    component: CustomerGroupPage
  },
  {
    path: 'customer-history',
    component: CustomerHistoryPage
  },
  {
    path: 'customer-statis',
    component: CustomerStatisPage
  },
  {
    path: 'customer-detail',
    component: CustomerDetailPage
  },
  {
    path: 'customer-depquery',
    component: CustomerDepqueryPage
  }
]

const PAGES = [CustomerListPage, CustomerDetailPage]
@NgModule({
  declarations: [
    ...PAGES,
    CustomerItemComponent,
    CustomerQueryPage,
    CustomerGroupPage,
    CustomerStatisPage,
    CustomerDetailPage,
    CustomerDepqueryPage,
    CustomerHistoryPage
  ],
  entryComponents: [CustomerItemComponent],
  imports: [SharedModule, RouterModule.forChild(routes)]
})
export class CustomerPageModule {}
