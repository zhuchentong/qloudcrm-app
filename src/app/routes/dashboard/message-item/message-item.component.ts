import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ViewChild,
  TemplateRef
} from '@angular/core'
import { Router } from '@angular/router'
import { DictType, MessageType, MessageTagType } from 'app/config/enum.config'
import { Template } from '@angular/compiler/src/render3/r3_ast'
import OriDomi from 'oridomi'
import { trigger, state, style, animate, transition } from '@angular/animations'
@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss'],
  animations: [
    trigger('fold', [
      state(
        'open',
        style({
          height: '290px'
        })
      ),
      state(
        'closed',
        style({
          height: '0px'
        })
      ),
      transition('closed => open', [animate('0.2s')]),
      transition('open => closed', [animate('0.2s')])
    ]),
    trigger('show', [
      state(
        'open',
        style({
          opacity: 1,
          height: '30px'
        })
      ),
      state(
        'closed',
        style({
          opacity: 0,
          height: '0px'
        })
      ),
      transition('closed => open', [animate('0.2s')]),
      transition('open => closed', [animate('0.2s')])
    ])
  ]
})
export class MessageItemComponent implements OnInit {
  @HostBinding('class')
  private hostClass: string[]
  @ViewChild('detail')
  private detail: any
  private folded
  public isFolded = true
  @Input()
  public data
  @Input()
  public showStatus = false
  @Input()
  public canFold = false

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

    if (this.canFold) {
      const folded = new OriDomi(this.detail.nativeElement, {
        touchEnabled: false,
        hPanels: 4
      })
      folded.accordion(180, 'top').setSpeed(0)
      this.folded = folded
    }
  }

  public onOpenDetail() {
    if (this.canFold) {
      this.folded.accordion(this.isFolded ? 0 : 180, 'top').setSpeed(500)
      this.isFolded = !this.isFolded
    } else {
      this.goToDetail()
    }
  }

  public goToDetail() {
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
