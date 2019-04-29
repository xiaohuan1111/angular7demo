import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { AddnewsComponent } from './component/addnews/addnews.component';
import { NewscateComponent } from './component/newscate/newscate.component';
import { NewslistComponent } from './component/newslist/newslist.component';

@NgModule({
  declarations: [AddnewsComponent, NewscateComponent, NewslistComponent],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
