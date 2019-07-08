import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-risk-detail',
  templateUrl: './risk-detail.page.html',
  styleUrls: ['./risk-detail.page.scss']
})
export class RiskDetailPage implements OnInit {
  public data: any = {}

  constructor() {}

  public ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('current-message'))
  }
}
