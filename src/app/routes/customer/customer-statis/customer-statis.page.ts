import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core'
import { Columns } from 'ngx-easy-table'
import { TableConfig } from 'app/config/table.config'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { NetService } from 'app/core/http'
import { CustomerstatisService } from 'app/services/customer/customerstatis.service'
import { LoggerService } from '@ngx-toolkit/logger'
import {forEach} from "@angular-devkit/schematics";

@Component({
  selector: 'app-customer-statis',
  templateUrl: './customer-statis.page.html',
  styleUrls: ['./customer-statis.page.scss'],
  providers:[CustomerstatisService]
})
export class CustomerStatisPage implements OnInit {
  @ViewChild('nameRowTpl') public nameRowTpl: TemplateRef<any>

  public tabIndex = 0;

  private oneIndex = {"index":0, "code":"customerNum", "name":"客户数统计"};

  private dataOne = [{
    "productTyepe": "额度类贷款",
    "customerNum": 1522,    //客户数
    "dkye": 60003,          //贷款余额
    "rjz": 6900,            //日进增
    "yjz": 323400,             //当年净增
    "dayNewAmount": 20000,     //日新发放额
    "dayReturnAmount": 1000,  //日还款额（本金）
    "yearNewAmount": 2450921, //当年新发放额
    "yearReturnAmount": 1920312
  },
    {
      "productTyepe": "CFC类贷款",
      "customerNum": 234,
      "dkye": 145673,
      "rjz": 4000,            //日进增
      "yjz": 173400,             //当年净增
      "dayNewAmount": 5000,     //日新发放额
      "dayReturnAmount": 5000,  //日还款额（本金）
      "yearNewAmount": 17921, //当年新发放额
      "yearReturnAmount": 980312
    },
    {
      "productTyepe": "消费类贷款",
      "customerNum": 999,
      "dkye": 90673,
      "rjz": 34000,            //日进增
      "yjz": 2173400,             //当年净增
      "dayNewAmount": 6000,     //日新发放额
      "dayReturnAmount": 2000,  //日还款额（本金）
      "yearNewAmount": 317921, //当年新发放额
      "yearReturnAmount": 280312
    },
    {
      "productTyepe": "住房类贷款",
      "customerNum": 999,
      "dkye": 783900,
      "rjz": 14000,
      "yjz": 39000,
      "dayNewAmount": 9000,     //日新发放额
      "dayReturnAmount": 4000,  //日还款额（本金）
      "yearNewAmount": 377921, //当年新发放额
      "yearReturnAmount": 780312
    },
    {
      "productTyepe": "医用类贷款",
      "customerNum": 1099,
      "dkye": 20000,
      "rjz": 4100,
      "yjz": 39000,
      "dayNewAmount": 9000,     //日新发放额
      "dayReturnAmount": 4000,  //日还款额（本金）
      "yearNewAmount": 377921, //当年新发放额
      "yearReturnAmount": 780312
    }
  ];

  public mainOne = {
    "tooltip": {
      "trigger": "item",
      "formatter": "{a} <br/>{b}: {c} ({d}%)",
      "fontSize": 10
    },
    color: ['#186ba0', 'rgb(60, 78, 185)', 'rgb(27, 112, 239)', 'rgb(0, 171, 255)', 'rgb(64, 218, 241)', '#4AEAB0'],
    "series": [
      {
        "name": "资产负债分析",
        "type": "pie",
        "radius": [0, "90%"],
        label: {
          normal: {
            position: 'inner',
            formatter: '{b}\n{c}({d}%)',
            fontSize: 10,
          }
        },
        "data": []
      }
      ]
  };
  mainOne1 = {
    tooltip: {
      trigger: 'axis'
    },
    color: ['#186ba0', 'rgb(60, 78, 185)', 'rgb(27, 112, 239)', 'rgb(0, 171, 255)', 'rgb(64, 218, 241)', '#4AEAB0'],
    grid: {
      left: '1',
      right: '3%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      show: true,
      data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
    },
    yAxis: {
      type: 'value',
      boundaryGap: false,
      "show": false
    },
    series: [
      {
        name: '额度类贷款',
        type: 'line',
        data: [3, 4, 1, 3.4, 5, 6, 6.6]
      },
      {
        name: 'CFC类贷款',
        type: 'line',
        data: [1.5, 3.4, 2.1, 3.45, 4.25, 3.86, 4.6]
      },
      {
        name: '消费类贷款',
        type: 'line',
        data: [3.5, 4.7, 4.9, 5.4, 5.34, 5.43, 5.6]
      },
      {
        name: '住房类贷款',
        type: 'line',
        data: [3.5, 4.4, 5.1, 3.4, 2.35, 4.6, 7.7]
      },
      {
        name: '医用类贷款',
        type: 'line',
        data: [6.34, 5.64, 7.41, 6.4, 5.65, 4.34, 4.89]
      }
    ]
  };
  public mergeOne = {};
  public mergeOne1 = {};

  private dataTwo = [
  //   数量、贷款余额、比上日变动、比年初变动、AUM、资产余
  // 额
    {productType:"私人银行客户", num:10000, loanBalance:234500, preDayAmount:23300, preYearAmount:2340990, aum:495000, balance:980394},
    {productType:"财富管理客户", num:10000, loanBalance:234500, preDayAmount:23300, preYearAmount:2340990, aum:495000, balance:980394},
    {productType:"白金卡客户", num:1000, loanBalance:129876, preDayAmount:8372, preYearAmount:1238473, aum:100932, balance:837292},
    {productType:"金卡客户", num:1500, loanBalance:89033, preDayAmount:19803, preYearAmount:983003, aum:80932, balance:1293021},
    {productType:"潜力客户", num:9000, loanBalance:59201, preDayAmount:8730, preYearAmount:738832, aum:20910, balance:982012},
    {productType:"普通客户", num:21000, loanBalance:12364, preDayAmount:87302, preYearAmount:509932, aum:19820, balance:504932}
    ];
  public mainTwo = {
    "tooltip": {
      "trigger": "item",
      "formatter": "{a} <br/>{b}: {c} ({d}%)",
      "fontSize": 10
    },
    color: ['#893448', '#d95850', '#eb8146', '#ffb248', '#f2d643', '#ebdba4'],
    "series": [
      {
        "name": "资产负债分析",
        "type": "pie",
        "radius": [0, "90%"],
        label: {
          normal: {
            position: 'inner',
            formatter: '{b}\n{c}({d}%)',
            fontSize: 10,
          }
        },
        "data": []
      }
    ]
  };
  mainTwo1 = {
    tooltip: {
      trigger: 'axis'
    },
    color: ['#893448', '#d95850', '#eb8146', '#ffb248', '#f2d643', '#ebdba4'],
    grid: {
      left: '1',
      right: '3%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      show: true,
      data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
    },
    yAxis: {
      type: 'value',
      boundaryGap: false,
      "show": false
    },
    series: [
      {
        name: '私人银行客户',
        type: 'line',
        data: [30, 14, 15, 34, 25, 16, 66]
      },
      {
        name: '财富管理客户',
        type: 'line',
        data: [15, 14, 21, 35, 25, 86, 46]
      },
      {
        name: '白金卡客户',
        type: 'line',
        data: [15, 27, 19, 24, 34, 43, 6]
      },
      {
        name: '金卡客户',
        type: 'line',
        data: [25, 44, 51, 34, 35, 46, 27]
      },
      {
        name: '潜力客户',
        type: 'line',
        data: [34, 64, 41, 40, 55, 34, 89]
      },
      {
        name: '普通客户',
        type: 'line',
        data: [64, 54, 41, 40, 55, 34, 49]
      }
    ]
  };
  public mergeTwo = {};
  public mergeTwo1 = {};
  private twoIndex = {"index":0, "code":"num", "name":"客户数统计"};

  // 申请客户数、贷款申请金额
  private dataThree = [
    {productType:"额度类贷款", num:10000, loanBalance:234500},
    {productType:"住房类贷款", num:10000, loanBalance:134500},
    {productType:"消费类贷款", num:1000, loanBalance:129876},
    {productType:"CFC贷款", num:1500, loanBalance:89033}
  ];
  public mainThree = {
    "tooltip": {
      "trigger": "item",
      "formatter": "{a} <br/>{b}: {c} ({d}%)",
      "fontSize": 10
    },
    color: ['#3fb1e3', '#6be6c1', '#626c91', '#a0a7e6', '#c4ebad', '#96dee8'],
    "series": [
      {
        "name": "资产负债分析",
        "type": "pie",
        "radius": [0, "90%"],
        label: {
          normal: {
            position: 'inner',
            formatter: '{b}\n{c}({d}%)',
            fontSize: 10,
          }
        },
        "data": []
      }
    ]
  };
  mainThree1 = {
    tooltip: {
      trigger: 'axis'
    },
    color: ['#3fb1e3', '#6be6c1', '#626c91', '#a0a7e6', '#c4ebad', '#96dee8'],
    grid: {
      left: '1',
      right: '3%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      show: true,
      data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
    },
    yAxis: {
      type: 'value',
      boundaryGap: false,
      "show": false
    },
    series: [
      {
        name: '额度类贷款',
        type: 'line',
        data: [20, 21, 15, 34, 25, 16, 15]
      },
      {
        name: '住房类贷款',
        type: 'line',
        data: [15, 14, 13, 20, 21, 15, 14]
      },
      {
        name: '消费类贷款',
        type: 'line',
        data: [34, 27, 19, 40, 34, 43, 40]
      },
      {
        name: 'CFC贷款',
        type: 'line',
        data: [25, 22, 17, 37, 30, 30, 27]
      }
    ]
  };
  public mergeThree = {};
  public mergeThree1 = {};
  private threeIndex = {"index":0, "code":"num", "name":"申请客户数统计"};

  // 逾期客户数、贷款余额、逾期本金、逾期利息
  private dataFour = [
    {productType:"额度类贷款", num:10000, loanBalance:234500, amount:10000, amount1:920},
    {productType:"住房类贷款", num:10000, loanBalance:134500, amount:90000, amount1:9200},
    {productType:"消费类贷款", num:1000, loanBalance:129876, amount:50000, amount1:4920},
    {productType:"CFC贷款", num:1500, loanBalance:89033, amount:30000, amount1:3920}
  ];
  public mainFour = {
    "tooltip": {
      "trigger": "item",
      "formatter": "{a} <br/>{b}: {c} ({d}%)",
      "fontSize": 10
    },
    color: ['#d87c7c', '#919e8b', '#d7ab82', '#6e7074', '#61a0a8', '#efa18d'],
    "series": [
      {
        "name": "资产负债分析",
        "type": "pie",
        "radius": [0, "90%"],
        label: {
          normal: {
            position: 'inner',
            formatter: '{b}\n{c}({d}%)',
            fontSize: 10,
          }
        },
        "data": []
      }
    ]
  };
  mainFour1 = {
    tooltip: {
      trigger: 'axis'
    },
    color: ['#d87c7c', '#919e8b', '#d7ab82', '#6e7074', '#61a0a8', '#efa18d'],
    grid: {
      left: '1',
      right: '3%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      show: true,
      data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
    },
    yAxis: {
      type: 'value',
      boundaryGap: false,
      "show": false
    },
    series: [
      {
        name: '额度类贷款',
        type: 'line',
        data: [20, 21, 15, 34, 25, 16, 15]
      },
      {
        name: '住房类贷款',
        type: 'line',
        data: [15, 14, 13, 20, 21, 15, 14]
      },
      {
        name: '消费类贷款',
        type: 'line',
        data: [34, 27, 19, 40, 34, 43, 40]
      },
      {
        name: 'CFC贷款',
        type: 'line',
        data: [25, 22, 17, 37, 30, 30, 27]
      }
    ]
  };

  public mergeFour = {};
  public mergeFour1 = {};
  private fourIndex = {"index":0, "code":"num", "name":"逾期客户数统计"};

  constructor(
    public tableConfig: TableConfig,
    public router: Router,
    public customerstatisservice: CustomerstatisService,
    private logger: LoggerService) {
    this.tableConfig.update({
      detailsTemplate: true,
      showDetailsArrow: true
    })
  }

  public ngOnInit() {
    // this.columns = [
    //   { key: 'productTyepe', title: '产品类型' },
    //   { key: 'customerNum', title: '客户数目' }
    // ]

    this.repaintOne(this.oneIndex);
    this.repaintTwo(this.twoIndex);
    this.repaintThree(this.threeIndex);
    this.repaintFour(this.fourIndex);
    // this.customerstatisservice.getCustomerStatis({}).subscribe(data => {
    //   this.rows = data
    // })
  }

  click1(index) {
    this.oneIndex.index = index;
    switch (index) {
      case 0:
        this.oneIndex.code = "customerNum";
        this.oneIndex.name = "客户数统计";
        break;
      case 1:
        this.oneIndex.code = "dkye";
        this.oneIndex.name = "贷款余额统计";
        break;
      case 2:
        this.oneIndex.code = "rjz";
        this.oneIndex.name = "当日净增额统计";
        break;
      case 3:
        this.oneIndex.code = "yjz";
        this.oneIndex.name = "当年净增额统计";
        break;
      case 4:
        this.oneIndex.code = "dayReturnAmount";
        this.oneIndex.name = "日还款额（本金）统计";
        break;
      case 5:
        this.oneIndex.code = "yearReturnAmount";
        this.oneIndex.name = "年还款额（本金）统计";
        break;
    }
    this.repaintOne(this.oneIndex);
  }

  repaintOne(config) {
    var items = new Array();
    for(var index=0; index<this.dataOne.length; index++) {
      items.push({"name": this.dataOne[index].productTyepe, "value": this.dataOne[index][config.code]});
    }
    this.mergeOne = {
      series: [{"name":config.name,"data": items}]
    };
  }

  click2(index) {
    this.twoIndex.index = index;
    switch (index) {
      case 0:
        this.twoIndex.code = "num";
        this.twoIndex.name = "客户数统计";
        break;
      case 1:
        this.twoIndex.code = "loanBalance";
        this.twoIndex.name = "贷款余额统计";
        break;
      case 2:
        this.twoIndex.code = "preDayAmount";
        this.twoIndex.name = "比上日变动统计";
        break;
      case 3:
        this.twoIndex.code = "preYearAmount";
        this.twoIndex.name = "比年初变动统计";
        break;
      case 4:
        this.twoIndex.code = "aum";
        this.twoIndex.name = "AUM统计";
        break;
      case 5:
        this.twoIndex.code = "balance";
        this.twoIndex.name = "资产余额统计";
        break;
    }
    this.repaintTwo(this.twoIndex);
  }

  repaintTwo(config) {
    var items = new Array();
    for(var index=0; index<this.dataTwo.length; index++) {
      items.push({"name": this.dataTwo[index].productType, "value": this.dataTwo[index][config.code]});
    }
    this.mergeTwo = {
      series: [{"name":config.name,"data": items}]
    };
  }

  click3(index) {
    this.threeIndex.index = index;
    switch (index) {
      case 0:
        this.threeIndex.code = "num";
        this.threeIndex.name = "申请客户数统计";
        break;
      case 1:
        this.threeIndex.code = "loanBalance";
        this.threeIndex.name = "贷款申请金额统计";
        break;
    }
    this.repaintThree(this.threeIndex);
  }

  repaintThree(config) {
    var items = new Array();
    for(var index=0; index<this.dataThree.length; index++) {
      items.push({"name": this.dataThree[index].productType, "value": this.dataThree[index][config.code]});
    }
    this.mergeThree = {
      series: [{"name":config.name,"data": items}]
    };
  }

  click4(index) {
    this.fourIndex.index = index;
    switch (index) {
      case 0:
        this.fourIndex.code = "num";
        this.fourIndex.name = "逾期客户数统计";
        break;
      case 1:
        this.fourIndex.code = "loanBalance";
        this.fourIndex.name = "贷款余额统计";
        break;
      case 2:
        this.fourIndex.code = "amount";
        this.fourIndex.name = "逾期本金统计";
        break;
      case 3:
        this.fourIndex.code = "amount1";
        this.fourIndex.name = "逾期利息统计";
        break;
    }
    this.repaintFour(this.fourIndex);
  }

  repaintFour(config) {
    var items = new Array();
    for(var index=0; index<this.dataFour.length; index++) {
      items.push({"name": this.dataFour[index].productType, "value": this.dataFour[index][config.code]});
    }
    this.mergeFour = {
      series: [{"name":config.name,"data": items}]
    };
  }

  selectCard(data) {
    this.tabIndex = data.index;
  }
}
