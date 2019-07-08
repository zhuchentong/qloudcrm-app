import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import { IonicModule } from '@ionic/angular'
import { DashboardPage } from './dashboard.page'
import { SharedModule } from 'app/shared/shared.module'
import { RiskDetailPage } from './risk-detail/risk-detail.page'
import { MarketingDetailPage } from './marketing-detail/marketing-detail.page'
import { WorkDetailPage } from './work-detail/work-detail.page'
import { MessageListPage } from './message-list/message-list.page'
import { MessageItemComponent } from './message-item/message-item.component'
import { CustomerDetailPage } from './customer-detail/customer-detail.page'
import { BusinessDetailPage } from './business-detail/business-detail.page'
import { ApplyDetailPage } from './apply-detail/apply-detail.page'
import { ReviewDetailPage } from './review-detail/review-detail.page'
import { OverdueDetailPage } from './overdue-detail/overdue-detail.page'
import { HttpClientModule } from '@angular/common/http'

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path: 'risk-detail',
    component: RiskDetailPage
  },
  {
    path: 'marketing-detail',
    component: MarketingDetailPage
  },
  {
    path: 'work-detail',
    component: WorkDetailPage
  },
  {
    path: 'customer-detail',
    component: CustomerDetailPage
  },
  {
    path: 'business-detail',
    component: BusinessDetailPage
  },
  {
    path: 'apply-detail',
    component: ApplyDetailPage
  },
  {
    path: 'review-detail',
    component: ReviewDetailPage
  },
  {
    path: 'overdue-detail',
    component: OverdueDetailPage
  },
  {
    path: 'message-list',
    component: MessageListPage
  }
]

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [
    DashboardPage,
    RiskDetailPage,
    MarketingDetailPage,
    WorkDetailPage,
    MessageListPage,
    CustomerDetailPage,
    BusinessDetailPage,
    ApplyDetailPage,
    ReviewDetailPage,
    OverdueDetailPage,
    MessageItemComponent
  ],
  entryComponents: [MessageItemComponent]
})
export class DashboardPageModule {}
