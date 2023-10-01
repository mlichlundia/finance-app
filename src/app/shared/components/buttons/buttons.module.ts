import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SmallButtonComponent } from './small-button/small-button.component';


@NgModule({
  declarations: [
    SmallButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SmallButtonComponent
  ]
})
export class ButtonsModule {}
