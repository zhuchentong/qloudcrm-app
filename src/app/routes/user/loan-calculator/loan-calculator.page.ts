import {Component, OnInit} from '@angular/core'
import {LoggerService} from '@ngx-toolkit/logger'
import NumberFormat = Intl.NumberFormat
import {until} from 'selenium-webdriver'
import elementLocated = until.elementLocated

@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.page.html',
  styleUrls: ['./loan-calculator.page.scss'],
})
export class LoanCalculatorPage implements OnInit {
  public tabIndex = 0
  public loanCalculateTitle = '贷款计算工具'
  public estateLoanTitle = '按揭贷款计算器'
  public personalConsumerTite = '个人消费贷款计算器'
  public loanType: string
  public loanAmount: number = 0
  public loanTerm: number = 0
  public loanRate: number = 4.25
  public computeButton: string = '计算'
  public consumAmount: number = 0
  public principal: number = 0
  public interest: number = 0
  public payment: number = 0
  public calculateResult = []
  public periodicPay: PeriodicPay
  public interestRate: number = 0.0864 //消费贷款利率
  public showResult = false   //是否显示结果

  public loanCapital: number
  public loanTerm2: number
  public payCapitall: number
  public payInterest: number
  public averagePay: number

  /**
   *
   * @param {LoggerService} logger
   */
  constructor(private logger: LoggerService) {

  }

  public ngOnInit() {
  }

  public restform(){
    this.payCapitall = 0
    this.payInterest = 0
    this.averagePay = 0
    this.loanCapital=0
    this.loanTerm2=0
    this.loanAmount=0
    this.loanTerm=0
    this.calculateResult=[]
  }


  /**
   *
   */
  public calculateConsumerLoan() {
    this.payCapitall = 0
    this.payInterest = 0
    this.averagePay = 0
    this.payCapitall= Math.round((this.loanCapital/this.loanTerm2)*100)/100
    this.payInterest= Math.round((this.loanCapital*this.interestRate)/this.loanTerm2*100)/100
    this.averagePay= this.payCapitall+ this.payInterest
  }

  public calculateAverageCapital() {
    this.calculateResult = []
    let monthelyRate = this.loanRate / 100 / 12
    let averageMonthCapital = Math.round((this.loanAmount / this.loanTerm) * 100) / 100
    // let currentRemain =0
    let currentPaidPrincipal = 0
    for (let i = 1; i <= this.loanTerm; i++) {
      let currentInterest = Math.round((this.loanAmount - currentPaidPrincipal) * monthelyRate * 100) / 100
      let averageCapitalPllusInterest = Math.round((currentInterest + averageMonthCapital) * 100) / 100
      let currentRemain = 0
      if (i < this.loanTerm) {
        currentPaidPrincipal = Math.round((currentPaidPrincipal + averageMonthCapital) * 100) / 100
        currentRemain = Math.round((this.loanAmount - currentPaidPrincipal) * 100) / 100
      } else {
        currentPaidPrincipal = this.loanAmount
        currentRemain = 0
      }
      this.calculateResult.push(new PeriodicPay(i, this.loanTerm, averageCapitalPllusInterest, currentInterest, averageMonthCapital,
        currentPaidPrincipal, currentRemain))
    }
  }

  public calculateAverageCapitalPlusInterest() {
    this.calculateResult = []
    let monthelyRate = this.loanRate / 100 / 12
    let param1 = Math.pow(1 + monthelyRate, this.loanTerm)
    let param2 = this.loanAmount * monthelyRate * param1
    let param3 = param1 - 1
    let param4 = Math.round((param2 / param3) * 100) / 100
    //   this.logger.info(param1 + ' ' + param2 + ' ' + param3 + ' ' + param4)
    let currentPaidPrincipal = 0
    for (let i = 1; i <= this.loanTerm; i++) {
      let currentInterest = Math.round(((this.loanAmount - currentPaidPrincipal) * monthelyRate) * 100) / 100
      let currentPayCapital = Math.round((param4 - currentInterest) * 100) / 100
      //    this.logger.info('currentPayCapital:' + currentPayCapital)
      // this.logger.info(currentPaidPrincipal)
      let currentRemain = 0
      if (i < this.loanTerm) {
        currentPaidPrincipal = Math.round(currentPaidPrincipal * 100) / 100 + currentPayCapital
        currentRemain = Math.round((this.loanAmount - currentPaidPrincipal) * 100) / 100
      } else {
        currentPaidPrincipal = this.loanAmount
        currentRemain = 0
      }
      this.calculateResult.push(new PeriodicPay(i, this.loanTerm, param4, currentInterest, currentPayCapital, currentPaidPrincipal,
        currentRemain))
    }


  }

  public caculateEstateLoan() {
    if ('1' === this.loanType) {
      this.calculateAverageCapitalPlusInterest()
    } else {
      this.calculateAverageCapital()
    }
  }
}

export class PeriodicPay {
  constructor(public periodNum: number,     // 第几期
              public totalPayCount: number, // 还款期数
              public eachPeriodictPay: number, // 每期支付费用
              public eachPeriodicInterest: number, // 每期利息
              public eachPeriodicPrincipal: number, // 每期偿还本金
              public currentPaidPrincipal: number,  // 当前已经还款
              public currentRemain: number // 本期剩余
  ) {
  }
}
