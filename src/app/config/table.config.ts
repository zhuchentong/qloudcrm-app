import { Injectable } from '@angular/core'
import { DefaultConfig, Config } from 'ngx-easy-table'

@Injectable({
  providedIn: 'root'
})
export class TableConfig {
  public currentConfig

  public get config(): Config {
    if (!this.currentConfig) {
      this.currentConfig = DefaultConfig
      this.currentConfig.orderEnabled = false
      this.currentConfig.paginationEnabled = false
    }
    return this.currentConfig
  }

  public update(config) {
    this.currentConfig = Object.assign(this.config, config)
  }
}
