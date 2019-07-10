import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-focus-item',
  templateUrl: './focus-item.page.html',
  styleUrls: ['./focus-item.page.scss']
})
export class FocusItemPage implements OnInit {
  @Input()
  public data

  // public routeList = {
  //   [MessageType.RISKMSG]: '/dashboard/risk-detail',
  //   [MessageType.MARKETINGMSG]: '/dashboard/marketing-detail',
  //   [MessageType.CUSTOMERMSG]: '/dashboard/customer-detail',
  //   [MessageType.WORKMSG]: '/dashboard/work-detail'
  //   // 商机提醒: '/dashboard/business-detail',
  //   // 申请提醒: '/dashboard/apply-detail',
  //   // 核准提醒: '/dashboard/review-detail',
  //   // 逾期提醒: '/dashboard/overdue-detail'
  // }
  constructor(public router: Router) {}

  public ngOnInit() {}

  public onOpenDetail() {
    // localStorage.setItem('current-message', JSON.stringify(this.data))
    //
    // const url = this.routeList[this.data.type]
    // url && this.router.navigateByUrl(url)
  }

  public getItemClass() {
    return {
      [`${this.data.type.toLowerCase()}-item`]: true
    }
  }
}
