import { NgModule } from '@angular/core'
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
import { ProductPageComponent } from './product-view/product-view.page'
import { ProductMapPage } from './product-map/product-map.page'
import { ProductRoutingModule } from './product-routeing.module'
import { NgxAmapModule } from 'ngx-amap'

const PAGES = [
  ProductPage,
  ProductDetailPage,
  ProductDirectoryPage,
  ProductQueryPage,
  ProductRankPage,
  ProductComparePage,
  ProductCompareDetailPage,
  ProductPageComponent,
  ProductMapPage
]

const COMPONENTS = [ProductItemComponent, ProductSelectPage]

@NgModule({
  imports: [SharedModule, ProductRoutingModule, NgxAmapModule],
  declarations: [...PAGES, ...COMPONENTS],
  entryComponents: [...COMPONENTS]
})
export class ProductPageModule {}
