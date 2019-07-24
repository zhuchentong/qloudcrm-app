import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core'
import { MenuController, IonSearchbar } from '@ionic/angular'
import { Store } from '@ngxs/store'
import { FormBuilder, Validators } from '@angular/forms'
import { DashboardService } from 'app/services/dashboard.service'
import { MessageModel } from 'app/model/message.model'
import { DictType } from 'app/config/enum.config'
import { DictState } from 'app/store/state/dict.state'
import { start } from 'repl'

@Component({
  selector: 'app-message-search',
  templateUrl: './message-search.page.html',
  styleUrls: ['./message-search.page.scss'],
  providers: [DashboardService]
})
export class MessageSearchPage implements OnInit {
  @ViewChild('search')
  private searchBar: IonSearchbar

  public searchContent: string
  public searchType: string
  public searchDate: number

  public messageDataSet: MessageModel[]

  /**
   * 获取消息列表
   */
  public get messageList() {
    let startTime
    if (this.searchDate) {
      startTime = Date.now() - 1000 * 60 * 60 * 24 * this.searchDate
    }
    return this.messageDataSet
      .filter(x => !this.searchType || this.searchType === x.type)
      .filter(x => !startTime || x.time.getTime() > startTime)
  }

  public get messageType() {
    return this.store.selectSnapshot(DictState.getDict(DictType.MessageType))
  }

  constructor(
    public store: Store,
    private dashboardService: DashboardService
  ) {}

  public ngOnInit() {
    this.searchBar.setFocus()
  }

  /**
   * 搜索消息
   */
  public onSearch() {
    this.searchDate = null
    this.searchType = null
    this.dashboardService
      .getMessageList({
        title: this.searchContent
      })
      .subscribe(data => {
        this.messageDataSet = data
      })
  }
}
