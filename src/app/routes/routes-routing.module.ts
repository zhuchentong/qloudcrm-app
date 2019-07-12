import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { RoutesComponent } from './routes.component'
import { AuthGuard } from 'app/core/guards/auth.guard'

const routes: Routes = [
  {
    path: 'tabs',
    component: RoutesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'customer',
        loadChildren: './customer/customer.module#CustomerPageModule'
      },
      {
        path: 'product',
        loadChildren: './product/product.module#ProductPageModule'
      },
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardPageModule'
      },
      {
        path: 'marketing',
        loadChildren: './marketing/marketing.module#MarketingPageModule'
      },
      {
        path: 'user',
        loadChildren: './user/user.module#UserPageModule'
      }
    ]
  },
  {
    path: 'product',
    loadChildren: './product/product.module#ProductPageModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardPageModule'
  },
  {
    path: 'marketing',
    loadChildren: './marketing/marketing.module#MarketingPageModule'
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserPageModule'
  },
  {
    path: '',
    redirectTo: '/tabs/dashboard',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule {}
