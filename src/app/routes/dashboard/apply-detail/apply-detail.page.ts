import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-apply-detail',
  templateUrl: './apply-detail.page.html',
  styleUrls: ['./apply-detail.page.scss']
})
export class ApplyDetailPage implements OnInit {
  public items = [
    {
      name: '商户003',
      address: '西安市高新六路212号',
      phone: '18093742312',
      city: '西安',
      amount: '¥130,000',
      status: '成功'
    },
    {
      name: '商户003',
      address: '西安市高新六路212号',
      phone: '18093742312',
      city: '西安',
      amount: '¥230,000',
      status: '驳回'
    },
    {
      name: '商户003',
      address: '西安市高新六路212号',
      phone: '18093742312',
      city: '西安',
      amount: '¥230,000',
      status: '数据不完整'
    },
    {
      name: '商户003',
      address: '西安市高新六路212号',
      phone: '18093742312',
      city: '西安',
      amount: '¥230,000',
      status: '成功'
    },
    {
      name: '商户003',
      address: '西安市高新六路212号',
      phone: '18093742312',
      city: '西安',
      amount: '¥230,000',
      status: '成功'
    }
  ]

  constructor() {}

  ngOnInit() {}
}
