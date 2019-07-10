import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { BackButtonComponent } from './components/back-button/back-button.component'
import { NgxDatatableModule } from '@swimlane/ngx-datatable'
import { NgxEchartsModule } from 'ngx-echarts'
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile'
import { EmptyComponent } from './components/empty/empty.component'
import { DictPipe } from './pipes/dict.pipe'

const BASE_MODULE = [CommonModule, FormsModule, IonicModule]
const COMPONENTS = [BackButtonComponent, EmptyComponent]
const PIPES = [DictPipe]
@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [
    ...BASE_MODULE,
    NgxDatatableModule,
    NgxEchartsModule,
    NgZorroAntdMobileModule
  ],
  entryComponents: [...COMPONENTS],
  exports: [
    ...COMPONENTS,
    ...BASE_MODULE,
    ...PIPES,
    NgxDatatableModule,
    NgxEchartsModule,
    NgZorroAntdMobileModule
  ]
})
export class SharedModule {}
