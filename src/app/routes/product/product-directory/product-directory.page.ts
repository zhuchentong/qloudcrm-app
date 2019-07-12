import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-product-directory',
  templateUrl: './product-directory.page.html',
  styleUrls: ['./product-directory.page.scss']
})
export class ProductDirectoryPage implements OnInit {
  public activeKey = [0, 1]
  public accordions: Array<any> = [
    {
      title: '个人存储存款',
      child: ['存储账号信息', '存款时间', '存储点'],
      inactive: false
    },
    {
      title: '银行卡',
      child: ['银行卡归属地', '银行卡办理业务'],
      inactive: false
    },
    {
      title: '个人贷款',
      child: ['贷款时间', '贷款金额'],
      inactive: false
    },
    {
      title: '电子银行',
      child: [
        '电子银行业务',
        '电子银行收费',
        '电子银行特色业务',
        '电子银行出纳'
      ],
      inactive: false
    },
    {
      title: '投资理财类',
      child: ['E时代投资', '大资管系列'],
      inactive: false
    }
  ]
  constructor() {}

  public ngOnInit() {}

  public onChange(event) {}
}
