import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'
import { IonicModule } from '@ionic/angular'
import { ProductPage } from './product.page'
import { ProductDetailPage } from './product-detail/product-detail.page'
import { ProductDirectoryPage } from './product-directory/product-directory.page'
import { ProductItemComponent } from './product-item/product-item.component'
import { ProductQueryPage } from './product-query/product-query.page'
import { ProductRankPage } from './product-rank/product-rank.page'
import { SharedModule } from 'app/shared/shared.module'
import { ProductComparePage } from './product-compare/product-compare.page'
import { ProductSelectPage } from './product-select/product-select.page'
import { ProductCompareDetailPage } from './product-compare-detail/product-compare-detail.page'

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
  }
]

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [
    ProductSelectPage,
    ProductPage,
    ProductDetailPage,
    ProductDirectoryPage,
    ProductQueryPage,
    ProductRankPage,
    ProductComparePage,
    ProductItemComponent,
    ProductCompareDetailPage
  ],
  entryComponents: [ProductItemComponent, ProductSelectPage]
})
export class ProductPageModule {}
