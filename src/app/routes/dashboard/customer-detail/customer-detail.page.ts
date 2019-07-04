import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.page.html',
  styleUrls: ['./customer-detail.page.scss']
})
export class CustomerDetailPage implements OnInit {
  public data: any = {}

  constructor() {}

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('current-message'))
  }
}
