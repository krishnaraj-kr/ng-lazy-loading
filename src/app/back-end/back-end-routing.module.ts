import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackEndShellComponent } from './components/back-end-shell/back-end-shell.component';

const routes: Routes = [
  { path: '', component: BackEndShellComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackEndRoutingModule { }
