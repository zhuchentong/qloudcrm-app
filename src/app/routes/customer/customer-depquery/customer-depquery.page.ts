import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core'
import { LoggerService } from '@ngx-toolkit/logger'

@Component({
  selector: 'app-customer-depquery',
  templateUrl: './customer-depquery.page.html',
  styleUrls: ['./customer-depquery.page.scss']
})
export class CustomerDepqueryPage implements OnInit {
  public activeKey = [0, 1]
  public accordions: Array<any> = [
    {
      title: '标签属性',
      child: ['标签名称', '标签属性', '标签规格'],
      inactive: false
    },
    {
      title: '产品属性',
      child: ['产品名称', '产品归属机构', '产品评估'],
      inactive: false
    },
    {
      title: '签约属性',
      child: ['产品名称', '产品归属机构', '产品评估'],
      inactive: true
    },
    {
      title: '渠道偏好属性',
      child: ['产品名称', '产品归属机构', '产品评估'],
      inactive: true
    }
  ]
  constructor(private logger: LoggerService) {}

  public ngOnInit() {}

  public onChange(event) {
    this.logger.log(event)
  }
}
