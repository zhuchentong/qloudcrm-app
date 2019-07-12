import { Component, OnInit, Input, HostListener } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.scss']
})
export class CustomerItemComponent implements OnInit {
  @Input()
  public data

  @HostListener('click')
  private onCickItem() {
    this.router.navigateByUrl('/customer/customer-detail')
  }

  constructor(private router: Router) {}

  public ngOnInit() {}
}
