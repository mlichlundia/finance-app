import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProgressBarModule } from '../progress-bar/progress-bar.module';
import { ExpenseTileComponent } from './expense-tile/expense-tile.component';


@NgModule({
    declarations: [
        ExpenseTileComponent
    ],
    imports: [
        CommonModule,
        ProgressBarModule
    ],
    exports: [
        ExpenseTileComponent
    ]
})
export class TilesModule {}
