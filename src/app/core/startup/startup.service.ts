import { Injectable, Injector, Inject } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { zip } from 'rxjs'
import { catchError } from 'rxjs/operators'
import * as dict from 'app/config/dict.config'
import { DataDictService } from 'app/services/data-dict.service'
import { Store } from '@ngxs/store'
import { UpdateDictAction } from 'app/store/action/dict.action'

/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable()
export class StartupService {
  constructor(private store: Store, private dataDictService: DataDictService) {}

  public load(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve()
    }).then(() => {
      // TODO: should get by http
      this.store.dispatch(new UpdateDictAction(dict))
    })
  }
}
