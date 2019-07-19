import { Component, OnInit } from '@angular/core'
import { DashboardService } from 'app/services/dashboard.service'
import { DatePipe } from '@angular/common'
import { DictPipe } from 'app/shared/pipes/dict.pipe'
import { MessageModel } from 'app/model/message.model'
import { Store } from '@ngxs/store'
import { DictState } from 'app/store/state/dict.state'
import { DictType } from 'app/config/enum.config'

@Component({
  selector: 'app-message-status',
  templateUrl: './message-status.page.html',
  styleUrls: ['./message-status.page.scss'],
  providers: [DashboardService, DatePipe, DictPipe]
})
export class MessageStatusPage implements OnInit {
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

  /**
   * 获取消息列表
   * @param length
   */
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

  /**
   * 时间范围变化
   */
  public onStatusChanged(event) {
    const value = event.detail.value
    this.getMessageList(parseInt(value, 10))
  }

  // 图标初始化
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

  /**
   * 更新图标
   */
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
