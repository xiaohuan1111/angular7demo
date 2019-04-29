import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserlistRoutingModule } from './userlist-routing.module';
import { List1Component } from './list1/list1.component';
import { List2Component } from './list2/list2.component';
import { List3Component } from './list3/list3.component';

@NgModule({
  declarations: [List1Component, List2Component, List3Component],
  imports: [
    CommonModule,
    UserlistRoutingModule
  ]
})
export class UserlistModule { }
