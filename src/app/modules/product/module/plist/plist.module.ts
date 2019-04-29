import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlistRoutingModule } from './plist-routing.module';
import { List1Component } from './list1/list1.component';
import { List2Component } from './list2/list2.component';

@NgModule({
  declarations: [List1Component, List2Component],
  imports: [
    CommonModule,
    PlistRoutingModule
  ]
})
export class PlistModule { }
