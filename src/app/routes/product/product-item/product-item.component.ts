import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input()
  public data

  constructor() {}

  public ngOnInit() {}
}
