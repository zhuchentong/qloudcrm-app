import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ProductPage } from './product.page'
import { ProductDetailPage } from './product-detail/product-detail.page'
import { ProductDirectoryPage } from './product-directory/product-directory.page'
import { ProductQueryPage } from './product-query/product-query.page'
import { ProductRankPage } from './product-rank/product-rank.page'
import { ProductComparePage } from './product-compare/product-compare.page'
import { ProductCompareDetailPage } from './product-compare-detail/product-compare-detail.page'
import { ProductPageComponent } from './product-view/product-view.page'
import { ProductMapPage } from './product-map/product-map.page'

const routes: Routes = [
  {
    path: '',
    component: ProductPage
  },
  {
    path: 'product-detail',
    component: ProductDetailPage
  },
  {
    path: 'product-directory',
    component: ProductDirectoryPage
  },
  {
    path: 'product-query',
    component: ProductQueryPage
  },
  {
    path: 'product-rank',
    component: ProductRankPage
  },
  {
    path: 'product-compare',
    component: ProductComparePage
  },
  {
    path: 'product-compare-detail',
    component: ProductCompareDetailPage
  },
  {
    path: 'product-view',
    component: ProductPageComponent
  },
  {
    path: 'product-map',
    component: ProductMapPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
