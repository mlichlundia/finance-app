import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SavingsListComponent } from './savings-list/savings-list.component';

const routes = [
  {
    path: '',
    children: [
      { path: '', component: SavingsListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavingsRoutingModule {}
