import { Component, OnInit } from '@angular/core'
import { DashboardService } from 'app/services/dashboard.service'
import { DatePipe } from '@angular/common'
import { MessageModel } from 'app/model/message.model'
import { List } from 'linqts'
import { DictPipe } from 'app/shared/pipes/dict.pipe'
import { DictType, MessageType } from 'app/config/enum.config'
import { DictState } from 'app/store/state/dict.state'
import { Store } from '@ngxs/store'
@Component({
  selector: 'app-message-number',
  templateUrl: './message-number.page.html',
  styleUrls: ['./message-number.page.scss'],
  providers: [DashboardService, DatePipe, DictPipe]
})
export class MessageNumberPage implements OnInit {
  public options = {
    height: 400,
    forceFit: true
  }

  public messageList: MessageModel[] = []
  private chart: any
  constructor(
    private dashboardService: DashboardService,
    private store: Store,
    private datePipe: DatePipe,
    private dictPipe: DictPipe
  ) {}

  public ngOnInit() {}

  public getMessageList(length) {
    const endTime = Date.now()
    const startTime = endTime - 1000 * 60 * 60 * 24 * length
    this.dashboardService
      .getMessageList({
        range: {
          startTime: this.datePipe.transform(startTime, 'yyyy-MM-dd HH:mm'),
          endTime: this.datePipe.transform(endTime, 'yyyy-MM-dd HH:mm')
        }
      })
      .subscribe(data => {
        this.messageList = data
        this.updateChart(data)
      })
  }

  public onStatusChanged(event) {
    const value = event.detail.value
    this.getMessageList(parseInt(value, 10))
  }

  public ready(chart) {
    this.chart = chart
    this.chart.source([])
    this.chart.legend({
      align: 'center'
    })

    this.chart
      .interval()
      .position('type*count')
      .color('status')
      .adjust({
        type: 'dodge',
        marginRatio: 0.05 // 设置分组间柱子的间距
      })

    this.chart.render()
    this.getMessageList(7)
  }

  private updateChart(data) {
    const dataSet: any = []
    const statusList = [
      { status: '已处理', filter: x => x.status === 0 },
      { status: '未处理', filter: x => x.status !== 0 }
    ]

    this.store
      .selectSnapshot(DictState.getDict(DictType.MessageType))
      .forEach(x => {
        statusList.forEach(item => {
          dataSet.push({
            type: x.name,
            typeCode: x.code,
            status: item.status,
            filter: item.filter,
            count: 0
          })
        })
      })

    data.forEach(x => {
      const target = dataSet.find(
        item => x.type === item.typeCode && item.filter(x)
      )

      if (target) {
        target.count += 1
      }
    })

    this.chart.changeData(dataSet)
  }
}
