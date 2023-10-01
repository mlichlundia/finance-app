import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExpenseMock } from '../../../shared/mocks/expense.mock';
import { IExpenseInterface } from '../../../shared/models/expense.interface';

@Component({
  selector: 'app-savings-list',
  templateUrl: './savings-list.component.html',
  styleUrls: ['./savings-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SavingsListComponent {
  public savingsList: IExpenseInterface[] = ExpenseMock;
}
