import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
// import { TreeModule } from 'ng2-tree';
import { IonicModule } from '@ionic/angular';

import { ProductPage } from './product.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailPage } from './product-detail/product-detail.page';
import { ProductDirectoryPage } from './product-directory/product-directory.page';
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
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)],
  declarations: [
    ProductPage,
    ProductDetailPage,
    ProductDirectoryPage
  ]
})
export class ProductPageModule {
}
