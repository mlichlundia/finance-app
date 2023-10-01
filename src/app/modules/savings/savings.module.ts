import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppModule } from '../../app.module';
import { ButtonsModule } from '../../shared/components/buttons/buttons.module';
import { TilesModule } from '../../shared/components/tiles/tiles.module';
import { SavingsListComponent } from './savings-list/savings-list.component';
import { SavingsRoutingModule } from './savings-routing.module';


@NgModule({
  declarations: [
    SavingsListComponent
  ],
  imports: [
    CommonModule,
    SavingsRoutingModule,
    ButtonsModule,
    TilesModule
  ]
})
export class SavingsModule {}
