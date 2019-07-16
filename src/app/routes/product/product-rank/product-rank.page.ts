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
  public rows = []
  
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
      this.rows = data
    })
    this.columns = [
      { key: 'productName', title: '产品名称' },
      { key: 'productRank', title: '产品排名' }
    ]
  }
}
