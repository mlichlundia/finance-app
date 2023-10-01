export interface IExpenseInterface {
  id: number;
  name: string;
  currentAmount: number;
  target?: number;
  percent: number;
}
