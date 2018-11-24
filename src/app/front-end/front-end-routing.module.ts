import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontEndShellComponent } from './components/front-end-shell/front-end-shell.component';

const routes: Routes = [
  { path: '', component: FrontEndShellComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontEndRoutingModule { }
