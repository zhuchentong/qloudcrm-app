import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-marketing-detail',
  templateUrl: './marketing-detail.page.html',
  styleUrls: ['./marketing-detail.page.scss']
})
export class MarketingDetailPage implements OnInit {
  public data: any = {}

  constructor() {}

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('current-message'))
  }
}
