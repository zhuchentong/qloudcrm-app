import { Component, OnInit } from '@angular/core'
import { DashboardService } from 'app/services/dashboard.service'
import { MessageModel } from 'app/model/message.model'
import { DictState } from 'app/store/state/dict.state'
import { DictType } from 'app/config/enum.config'
import { Store } from '@ngxs/store'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.page.html',
  styleUrls: ['./message-list.page.scss'],
  providers: [DashboardService]
})
export class MessageListPage implements OnInit {
  public tabIndex = 0
  public currentMessageType: any = ''
  public messageTypeNumber: any[] = []
  public fixedTabs = false
  public type
  public messageDataSet: MessageModel[] = []
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private dashboardService: DashboardService
  ) {}

  public ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type')
    this.getMessageList()
  }

  /**
   * 获取消息列表
   */
  public getMessageList(event?) {
    this.dashboardService.getMessageList().subscribe(data => {
      this.messageDataSet = data
      this.getMessageNumber()
      setTimeout(() => {
        event && event.target.complete()
      }, 1000)
    })
  }

  /**
   * 获取消息数量
   */
  private getMessageNumber() {
    this.messageTypeNumber = this.store
      .selectSnapshot(DictState.getDict(DictType.MessageType))
      .map(x => {
        const messageList = this.messageDataSet.filter(
          message => message.type === x.code
        )
        return {
          ...x,
          list: [...messageList],
          length: messageList.length,
          icon: 'assets/icon/dashboard/' + x.code.toLowerCase() + '.svg'
        }
      })

    if (this.type) {
      const index = this.messageTypeNumber.findIndex(x => x.code === this.type)
      if (index >= 0) {
        this.tabIndex = index + 1
      }
      this.type = ''
    }
  }

  /**
   * 监听tab页变化
   * @param param tabIndex
   */
  public onTabChange({ index }) {
    this.currentMessageType =
      index === 0 ? '' : this.messageTypeNumber[index - 1].code
  }

  /**
   * 滚动监听
   */
  public onScroll(event) {
    this.fixedTabs = event.detail.currentY > 80
  }
}
