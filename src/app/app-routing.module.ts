import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    data: { preload: true },
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'front-end',
    data: { preload: false },
    loadChildren: './front-end/front-end.module#FrontEndModule'
  },
  {
    path: 'back-end',
    data: { preload: false },
    loadChildren: './back-end/back-end.module#BackEndModule'
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
