import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { List1Component } from './list1/list1.component';
import { List2Component } from './list2/list2.component';
import { List3Component } from './list3/list3.component';

const routes: Routes = [
  {path: 'list1', component: List1Component},
  {path: 'list2', component: List2Component},
  {path: 'list3', component: List3Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserlistRoutingModule { }
