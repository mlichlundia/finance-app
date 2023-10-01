import { IExpenseInterface } from '../models/expense.interface';

export const ExpenseMock: IExpenseInterface[] = [
  {
    id: 0,
    name: 'real estate',
    currentAmount: 500000,
    target: 758000,
    percent: 5
  },
  {
    id: 1,
    name: 'car',
    currentAmount: 800,
    target: 1000,
    percent: 10
  },
  {
    id: 2,
    name: 'invest',
    currentAmount: 0,
    percent: 5
  },
  {
    id: 3,
    name: 'cat',
    currentAmount: 190,
    target: 200,
    percent: 30
  }
];
