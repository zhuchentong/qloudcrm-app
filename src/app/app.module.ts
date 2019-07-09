import { NgModule, APP_INITIALIZER } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouteReuseStrategy } from '@angular/router'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular'
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'

import { AppComponent } from './app.component'
import { RoutesModule } from './routes/routes.module'
import { MockModule } from './mock/mock.module'
import { HttpClientModule } from '@angular/common/http'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin'
import { NgxsModule } from '@ngxs/store'
import { LoggerModule, Level } from '@ngx-toolkit/logger'
import { environment } from '@env/environment'
import { states } from 'app/store'
import { StartupService } from './core'

const isDev = !environment.production
// #region global third module
const GLOBAL_THIRD_MODULES = [
  NgxsModule.forRoot(states, { developmentMode: isDev }),
  NgxsReduxDevtoolsPluginModule.forRoot(),
  NgxsStoragePluginModule.forRoot()
]
// #endregion

// #region log module
const LOG_MODULES = [LoggerModule.forRoot(isDev ? Level.LOG : Level.ERROR)]
// #endregion

// #region Startup Service
export function StartupServiceFactory(startupService: StartupService) {
  return () => startupService.load()
}

const APPINIT_PROVIDES = [
  StartupService,
  {
    provide: APP_INITIALIZER,
    useFactory: StartupServiceFactory,
    deps: [StartupService],
    multi: true
  }
]
// #endregion

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    RoutesModule,
    HttpClientModule,
    MockModule.forRoot(),
    GLOBAL_THIRD_MODULES,
    LOG_MODULES
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ...APPINIT_PROVIDES
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
