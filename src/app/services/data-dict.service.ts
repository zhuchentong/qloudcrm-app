import { NetService } from '@core/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { dataDictController } from 'app/config/service/data-dict.controller'

@Injectable({
  providedIn: 'root'
})
export class DataDictService {
  constructor(private net: NetService) {}

  /**
   * 获取字典
   */
  public getAll(): Observable<any> {
    return this.net.send({
      service: dataDictController.getAll
    })
  }
}
