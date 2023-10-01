import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SavingsListComponent } from './savings-list/savings-list.component';
import { SavingsRoutingModule } from './savings-routing.module';


@NgModule({
  declarations: [
    SavingsListComponent
  ],
  imports: [
    CommonModule,
    SavingsRoutingModule
  ]
})
export class SavingsModule {}
