import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { NetService } from 'app/core/http'
import { DashboardService } from 'app/services/dashboard.service'
import { MessageModel } from 'app/model/message.model'
import { LoggerService } from '@ngx-toolkit/logger'
import { Store } from '@ngxs/store'
import { DictType } from 'app/config/enum.config'
import { DictState } from 'app/store/state/dict.state'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  providers: [DashboardService]
})
export class DashboardPage implements OnInit {
  public a: MessageModel
  public colorList = {
    color1: {
      icon: '#d5a441',
      text: '#ffffff',
      background1: '#d5a441',
      background2: '#dfac45'
    },
    color2: {
      icon: '#5ea8d6',
      text: '#ffffff',
      background1: '#5ea8d6',
      background2: '#69baec'
    },
    color3: {
      icon: '#9978d6',
      text: '#ffffff',
      background1: '#9978d6',
      background2: '#a984ec'
    },
    color4: {
      icon: '#43af7d',
      text: '#FFFFF3',
      background1: '#43af7d',
      background2: '#49bd88'
    }
  }

  public newsList = [
    {
      type: '商机提醒',
      color: this.colorList.color1,
      title: '潜在客户提醒',
      content: '本周你经管的潜在客户中有7个客户有相应的贷款需求.',
      creator: '华软科技GCST',
      creatorTime: '2019-06-28 12:33'
    },
    {
      type: '申请提醒',
      color: this.colorList.color2,
      title: '贷款申请结果',
      content:
        '截止今天(2019-07-01)你的客户申请贷款件数为8件，其中6件合格，1件驳回，一件数据不完整.',
      creator: '华软科技GCST',
      creatorTime: '2019-06-28 12:33'
    },
    {
      type: '核准提醒',
      color: this.colorList.color3,
      title: '贷款数据核准',
      content:
        '截止今天(2019-07-01),你的累计商户送件为28件,其中20件已经开户且拨贷,总计857万元 ',
      creator: '华软科技GCST',
      creatorTime: '2019-06-28 12:33'
    },
    {
      type: '逾期提醒',
      color: this.colorList.color4,
      title: '贷款数据核准',
      content:
        '截止今天(2019-07-01),你所经管的商户贷客户中,有2户已经逾期90天未还款,金额为85万,请协助收回 ',
      creator: '华软科技GCST',
      creatorTime: '2019-06-28 12:33'
    },
    {
      type: '风险提醒',
      color: this.colorList.color1,
      title: '客户流失风险',
      content: '客户“李三”已有1个月没有互动、余额没有发生变动，存在流失的可能',
      creator: '华软科技GCST',
      creatorTime: '2019-06-28 12:33',
      picture: '/assets/images/dashboard-item.jpg'
    },
    {
      type: '风险提醒',
      color: this.colorList.color1,
      title: '客户降级风险',
      content:
        '客户“李三”的近一个月的月均余额都低于100000以下，存在从“金卡”客户降级为“普卡”客户',
      creator: '华软科技GCST',
      creatorTime: '2019-06-28 12:33',
      picture: '/assets/images/dashboard-item.jpg'
    },
    {
      type: '营销提醒',
      color: this.colorList.color2,
      title: '秋节营销活动',
      content:
        '秋节营销活动，适用于年满30岁、月均余额超过20000元的女性，推荐产品“中秋理财产品A_2019年”，最低购买10000元，每单位1元，有效期2019-07-01到2019-10-01',
      creator: '华软科技GCST',
      creatorTime: '2019-06-28 12:33',
      picture: '/assets/images/dashboard-item.jpg'
    },
    {
      type: '客户提醒',
      color: this.colorList.color3,
      title: '营销客户提醒',
      content:
        '客户名称“陈一”，性别女、年龄32岁，营销活动“中秋节营销活动”，客户基本信息（通过新的页面展示），推荐产品“中秋理财产品A_2019年”，可以点击查看该产品的香气，也可以与其他产品比较',
      creator: '华软科技GCST',
      creatorTime: '2019-06-28 12:33',
      picture: '/assets/images/dashboard-item.jpg'
    },
    {
      type: '客户提醒',
      color: this.colorList.color3,
      title: '客户签约提醒',
      content:
        '客户名称“陈一”已在2019-07-02签约购买了产品“中秋理财产品A_2019年”15000份，购买单价1元，购买金额15000元，客户经理：吴二，电话13912345678，产品到期期限',
      creator: '华软科技GCST',
      creatorTime: '2019-06-28 12:33',
      picture: '/assets/images/dashboard-item.jpg'
    },
    {
      type: '工作任务',
      color: this.colorList.color4,
      title: '月底绩效达标',
      content: '距离月底还有2天，客户经理：吴二，只完成了绩效目标的80%',
      creator: '华软科技GCST',
      creatorTime: '2019-06-28 12:33',
      picture: '/assets/images/dashboard-item.jpg'
    },
    {
      type: '工作任务',
      color: this.colorList.color4,
      title: '客户拜访提醒',
      content:
        '计划今天上午11点去XX银行拜访客户“李三”，营销计划“中秋节营销活动”，产品“中秋理财产品A_2019年”',
      creator: '华软科技GCST',
      creatorTime: '2019-06-28 12:33',
      picture: '/assets/images/dashboard-item.jpg'
    },
    {
      type: '工作任务',
      color: this.colorList.color4,
      title: '电话拜访提醒',
      content: '计划今天下午2点与XX银行的客户“王四”联系，了解其投资理财意向。',
      creator: '华软科技GCST',
      creatorTime: '2019-06-28 12:33',
      picture: '/assets/images/dashboard-item.jpg'
    }
  ]

  public slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: {
      delay: 5000
    }
  }

  public notifyList = [
    {
      picture: '/assets/images/dashboard-notify.jpg',
      content: '智慧银行全新升级v1.0'
    },
    {
      picture: '/assets/images/dashboard-notify.jpg',
      content: '智慧银行全新升级v2.0'
    },
    {
      picture: '/assets/images/dashboard-notify.jpg',
      content: '智慧银行全新升级v3.0'
    }
  ]

  public menuList = [
    {
      icon: 'search',
      label: '进度查询'
    },
    {
      icon: 'information-circle-outline',
      label: '数据预警'
    },
    {
      icon: 'list-box',
      label: '业绩查询'
    },
    {
      icon: 'people',
      label: '员工考核'
    },
    {
      icon: 'build',
      label: '自助服务'
    },
    {
      icon: 'podium',
      label: '数据汇总'
    },
    {
      icon: 'clipboard',
      label: '待办事项'
    },
    {
      icon: 'grid',
      label: '活动列表'
    }
  ]

  constructor(
    public router: Router,
    private dashboardService: DashboardService,
    public store: Store,
    private logger: LoggerService
  ) {}

  public getDict() {
    return this.store.selectSnapshot(DictState.getDict(DictType.SexState))
  }

  public ngOnInit() {
    this.dashboardService.getMessageList().subscribe(data => {
      this.a = data
      this.logger.log(data.a)
    })
  }
}
