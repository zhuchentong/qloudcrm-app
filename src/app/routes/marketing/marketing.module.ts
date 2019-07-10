import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import { IonicModule } from '@ionic/angular'

import { MarketingPage } from './marketing.page'
import { SharedModule } from 'app/shared/shared.module'
import { PerformanceDetailPage } from './performance-detail/performance-detail.page'

const routes: Routes = [
  {
    path: '',
    component: MarketingPage
  },
  {
    path: 'performance-detail',
    component: PerformanceDetailPage
  }
]

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [MarketingPage, PerformanceDetailPage]
})
export class MarketingPageModule {}
