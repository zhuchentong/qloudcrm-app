import { Component, OnInit, Input, HostBinding } from '@angular/core'
import { Router } from '@angular/router'
import { DictType, MessageType, MessageTagType } from 'app/config/enum.config'

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {
  @HostBinding('class')
  private hostClass: string[]
  @Input()
  public data
  @Input()
  public showStatus = false
  public routeList = {
    [MessageType.RISK]: '/dashboard/risk-detail',
    [MessageType.MARKETING]: '/dashboard/marketing-detail',
    [MessageType.CUSTOMER]: '/dashboard/customer-detail',
    [MessageType.WORK]: '/dashboard/work-detail',
    [MessageTagType.CUSTOMERPOTENTIAL]: '/dashboard/business-detail',
    [MessageTagType.LOANAPPLICATION]: '/dashboard/apply-detail',
    [MessageTagType.LOADAPPROVAL]: '/dashboard/review-detail',
    [MessageTagType.LOANOVERDUE]: '/dashboard/overdue-detail'
  }
  constructor(public router: Router) {}

  public ngOnInit() {
    this.hostClass = [this.data.type.toLowerCase()]
  }

  public onOpenDetail() {
    localStorage.setItem('current-message', JSON.stringify(this.data))
    const url = this.routeList[this.data.tag] || this.routeList[this.data.type]
    url && this.router.navigateByUrl(url)
  }

  public getItemClass() {
    return {
      [`${this.data.type.toLowerCase()}-item`]: true
    }
  }
}
