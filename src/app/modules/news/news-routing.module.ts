import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddnewsComponent } from './component/addnews/addnews.component';
import { NewscateComponent } from './component/newscate/newscate.component';
import { NewslistComponent } from './component/newslist/newslist.component';

const routes: Routes = [
  { path: 'newslist', component: NewslistComponent},
  { path: 'newscate', component: NewscateComponent},
  { path: 'addnews', component: AddnewsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
