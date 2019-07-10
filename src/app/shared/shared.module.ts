import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { BackButtonComponent } from './components/back-button/back-button.component'
import { NgxEchartsModule } from 'ngx-echarts'
import { TableModule } from 'ngx-easy-table'
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile'
import { EmptyComponent } from './components/empty/empty.component'
import { DictPipe } from './pipes/dict.pipe'

const BASE_MODULE = [CommonModule, FormsModule, IonicModule]
const COMPONENTS = [BackButtonComponent, EmptyComponent]
const THIRD_COMPONENTS = [
  NgxEchartsModule,
  NgZorroAntdMobileModule,
  TableModule
]
const PIPES = [DictPipe]
@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [...BASE_MODULE, ...THIRD_COMPONENTS],
  entryComponents: [...COMPONENTS],
  exports: [...COMPONENTS, ...BASE_MODULE, ...PIPES, ...THIRD_COMPONENTS]
})
export class SharedModule {}
