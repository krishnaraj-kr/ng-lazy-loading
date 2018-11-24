import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackEndRoutingModule } from './back-end-routing.module';
import { NodeComponent } from './components/node/node.component';
import { PythonComponent } from './components/python/python.component';
import { BackEndShellComponent } from './components/back-end-shell/back-end-shell.component';

@NgModule({
  imports: [
    CommonModule,
    BackEndRoutingModule
  ],
  declarations: [NodeComponent, PythonComponent, BackEndShellComponent]
})
export class BackEndModule { }
