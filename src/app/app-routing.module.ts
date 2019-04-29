import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Head1Component } from './components/head1/head1.component';
import { Head2Component } from './components/head2/head2.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'head1', component: Head1Component
      },
      {
        path: 'head2', component: Head2Component
      },
      {
        path: 'user', loadChildren: './modules/user/user.module#UserModule',
      },
      {
        path: 'product', loadChildren: './modules/product/product.module#ProductModule',
      },
      {
        path: 'news', loadChildren: './modules/news/news.module#NewsModule',
      }
    ]
  },
  { 
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
