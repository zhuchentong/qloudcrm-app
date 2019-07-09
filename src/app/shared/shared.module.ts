import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { BackButtonComponent } from './components/back-button/back-button.component'
import { NgxDatatableModule } from '@swimlane/ngx-datatable'
import { NgxEchartsModule } from 'ngx-echarts'
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile'
import { EmptyComponent } from './components/empty/empty.component'

const BASE_MODULE = [CommonModule, FormsModule, IonicModule]
const COMPONENTS = [BackButtonComponent, EmptyComponent]
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...BASE_MODULE,
    NgxDatatableModule,
    NgxEchartsModule,
    NgZorroAntdMobileModule
  ],
  entryComponents: [...COMPONENTS],
  exports: [
    ...BASE_MODULE,
    NgxDatatableModule,
    NgxEchartsModule,
    NgZorroAntdMobileModule
  ]
})
export class SharedModule {}
