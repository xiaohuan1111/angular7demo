import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PcateComponent } from './component/pcate/pcate.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';

const routes: Routes = [
  {
    path: 'plist', loadChildren: './module/plist/plist.module#PlistModule'
  },
  {
    path: 'pcate', component: PcateComponent
  },
  {
    path: 'addproduct', component: AddproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
