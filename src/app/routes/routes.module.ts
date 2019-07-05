import { NgModule } from '@angular/core';
import { RoutesComponent } from './routes.component';
import { RoutesRoutingModule } from './routes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RoutesComponent],
  imports: [SharedModule, RoutesRoutingModule]
})
export class RoutesModule {}
