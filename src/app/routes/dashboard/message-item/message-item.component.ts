import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {
  @Input()
  public data
  public routeList = {
    风险提醒: '/dashboard/risk-detail',
    营销提醒: '/dashboard/marketing-detail',
    客户提醒: '/dashboard/customer-detail',
    工作任务: '/dashboard/work-detail',
    商机提醒: '/dashboard/business-detail',
    申请提醒: '/dashboard/apply-detail',
    核准提醒: '/dashboard/review-detail',
    逾期提醒: '/dashboard/overdue-detail'
  }
  constructor(public router: Router) {}

  public ngOnInit() {}

  public onOpenDetail() {
    localStorage.setItem('current-message', JSON.stringify(this.data))

    this.router.navigate([this.routeList[this.data.type]])
  }
}
