import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YhqxComponent } from './yhqx/yhqx.component';
import { GrxxComponent } from './grxx/grxx.component';

const routes: Routes = [
  {
    path: 'userlist', loadChildren: './module/userlist/userlist.module#UserlistModule'
  },
  {
    path: 'yhqx', component: YhqxComponent
  },
  {
    path: 'grxx', component: GrxxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
