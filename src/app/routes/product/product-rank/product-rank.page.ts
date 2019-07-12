import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { NetService } from 'app/core/http'
import { ProductRankService } from 'app/services/product-rank.service'
import { Columns } from 'ngx-easy-table'
import { TableConfig } from 'app/config/table.config'
@Component({
  selector: 'app-product-rank',
  templateUrl: './product-rank.page.html',
  styleUrls: ['./product-rank.page.scss'],
  providers: [ProductRankService]
})
export class ProductRankPage implements OnInit {
  @ViewChild('nameRowTpl') public nameRowTpl: TemplateRef<any>
  public rows = [
    {
      productName: 'E时代商户贷款',
      productRank: '1',
      productType: '热销产品',
      productPro: '高',
      sales: '12339'
    },
    {
      productName: '农科技术贷款',
      productRank: '1',
      productType: '热销产品',
      productPro: '高',
      sales: '34501'
    },
    {
      productName: '科技公司类贷款',
      productRank: '2',
      productType: '推荐产品',
      productPro: '高',
      sales: '9900'
    },
    {
      productName: '资深商企用户贷款',
      productRank: '3',
      productType: '普通产品',
      productPro: '低',
      sales: '1500'
    }
  ]

  public columns: Columns[]

  public productList = []

  constructor(
    public router: Router,
    public tableConfig: TableConfig,
    public productrankService: ProductRankService
  ) {
    this.tableConfig.update({
      detailsTemplate: true,
      showDetailsArrow: true
    })
  }

  public ngOnInit() {
    this.productrankService.getProductRankList({ type: '' }).subscribe(data => {
      this.productList = data
    })
    this.columns = [
      { key: 'productName', title: '产品名称' },
      { key: 'productRank', title: '产品排名' }
    ]
  }
}
