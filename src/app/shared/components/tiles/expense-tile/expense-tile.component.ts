import { Component, Input } from '@angular/core';
import { IExpenseInterface } from '../../../models/expense.interface';

@Component({
  selector: 'app-expense-tile',
  templateUrl: './expense-tile.component.html',
  styleUrls: ['./expense-tile.component.scss']
})
export class ExpenseTileComponent {
  @Input() expense!: IExpenseInterface;
}
