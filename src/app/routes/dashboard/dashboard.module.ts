import { NgModule } from '@angular/core'
import { DashboardRoutingModule } from './dashboard-routing.module'

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

import { F2ChartModule } from 'ngx-f2'
import { MessageNumberPage } from './message-number/message-number.page'
import { MessageStatusPage } from './message-status/message-status.page'
import { MessageSearchPage } from './message-search/message-search.page'

const PAGES = [
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
  MessageNumberPage,
  MessageStatusPage,
  MessageSearchPage
]

const COMPONENTS = [MessageItemComponent]

@NgModule({
  imports: [SharedModule, DashboardRoutingModule, F2ChartModule],
  declarations: [...PAGES, ...COMPONENTS],
  entryComponents: [MessageItemComponent]
})
export class DashboardPageModule {}
