import { Component, OnInit } from '@angular/core'
import { DashboardService } from 'app/services/dashboard.service'
import { DatePipe } from '@angular/common'
import { MessageModel } from 'app/model/message.model'
import { DictPipe } from 'app/shared/pipes/dict.pipe'
import { DictType, MessageType } from 'app/config/enum.config'
import { DictState } from 'app/store/state/dict.state'
import { Store } from '@ngxs/store'
import { List } from 'linqts'
@Component({
  selector: 'app-message-number',
  templateUrl: './message-number.page.html',
  styleUrls: ['./message-number.page.scss'],
  providers: [DashboardService, DatePipe, DictPipe]
})
export class MessageNumberPage implements OnInit {
  public options = {
    height: 400,
    pixelRatio: window.window.devicePixelRatio,
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
    chart.source([], {
      percent: {
        formatter: function formatter(val) {
          return val * 100 + '%'
        }
      }
    })
    chart.legend({
      position: 'bottom',
      align: 'center',
      itemWidth: 70
    })
    chart.coord('polar', {
      transposed: true,
      radius: 0.55
    })

    chart.pieLabel({
      label1: function label1(data, color) {
        return {
          text: data.type,
          fill: color
        }
      },
      label2: function label2(data, color) {
        return {
          text: data.count,
          fill: color
        }
      }
    })

    chart.axis(false)
    chart
      .interval()
      .position('value*percent')
      .color('type')
      .adjust('stack')

    chart.render()
  }

  /**
   * 更新图标
   */
  private updateChart(data) {
    const dataSet = this.store
      .selectSnapshot(DictState.getDict(DictType.MessageType))
      .map(x => {
        const list = data.filter(item => item.type === x.code)
        return {
          type: x.name,
          percent: parseFloat((list.length / data.length).toFixed(2)),
          value: '1',
          count: list.length
        }
      })

    this.chart.changeData(dataSet)
  }
}
