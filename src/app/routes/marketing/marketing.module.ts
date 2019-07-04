import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import { IonicModule } from '@ionic/angular'

import { MarketingPage } from './marketing.page'
import { SharedModule } from 'src/app/shared/shared.module'

const routes: Routes = [
  {
    path: '',
    component: MarketingPage
  }
]

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [MarketingPage]
})
export class MarketingPageModule {}
