import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { throwIfAlreadyLoaded } from './module-import-guard'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { DefaultInterceptor } from './interceptors/default.interceptor'
import { EmptyInterceptor } from './interceptors/empty.interceptor'

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule')
  }

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: EmptyInterceptor,
          multi: true
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: DefaultInterceptor,
          multi: true
        }
      ]
    }
  }
}
