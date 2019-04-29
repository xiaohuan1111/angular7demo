import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { YhqxComponent } from './yhqx/yhqx.component';
import { GrxxComponent } from './grxx/grxx.component';

@NgModule({
  declarations: [YhqxComponent, GrxxComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
