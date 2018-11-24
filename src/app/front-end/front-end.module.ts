import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontEndRoutingModule } from './front-end-routing.module';
import { AngularComponent } from './components/angular/angular.component';
import { ReactComponent } from './components/react/react.component';
import { VueComponent } from './components/vue/vue.component';
import { FrontEndShellComponent } from './components/front-end-shell/front-end-shell.component';

@NgModule({
  imports: [
    CommonModule,
    FrontEndRoutingModule
  ],
  declarations: [AngularComponent, ReactComponent, VueComponent, FrontEndShellComponent]
})
export class FrontEndModule { }
