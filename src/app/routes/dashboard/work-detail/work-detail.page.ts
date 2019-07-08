import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.page.html',
  styleUrls: ['./work-detail.page.scss']
})
export class WorkDetailPage implements OnInit {
  public data: any = {}

  constructor() {}

  public ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('current-message'))
  }
}
