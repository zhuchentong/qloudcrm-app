import { Component, OnInit } from '@angular/core'
import {Router} from '@angular/router'

@Component({
  selector: 'app-user-tools',
  templateUrl: './user-tools.page.html',
  styleUrls: ['./user-tools.page.scss']
})
export class UserToolsPage implements OnInit {
  constructor(public router:Router ) {}

  public ngOnInit() {}

public goToolPage(url){
    this.router.navigate([url])
}

}
