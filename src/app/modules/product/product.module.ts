import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { PcateComponent } from './component/pcate/pcate.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';

@NgModule({
  declarations: [PcateComponent, AddproductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
