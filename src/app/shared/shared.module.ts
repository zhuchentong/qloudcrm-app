import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { BackButtonComponent } from './components/back-button/back-button.component'
import { NgxDatatableModule } from '@swimlane/ngx-datatable'
import { NgxEchartsModule } from 'ngx-echarts'

const BASE_MODULE = [CommonModule, FormsModule, IonicModule]
const COMPONENTS = [BackButtonComponent]
@NgModule({
  declarations: [...COMPONENTS],
  imports: [...BASE_MODULE, NgxDatatableModule, NgxEchartsModule],
  entryComponents: [...COMPONENTS],
  exports: [...BASE_MODULE, NgxDatatableModule, NgxEchartsModule]
})
export class SharedModule {}
