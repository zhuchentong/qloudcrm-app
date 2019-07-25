import { NetService } from '@core/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { customerdetailController } from 'app/config/service/customer/customerdetail.controller'
import { MessageModel } from 'app/model/message.model'
import { Store } from '@ngxs/store'
import { DictState } from 'app/store/state/dict.state'

@Injectable({
  providedIn: 'root'
})
export class DictConfigService {
  constructor(private store: Store) {}

  public getDict(param?) {
    return this.store.selectSnapshot(DictState.getDict(param))
  }
}
