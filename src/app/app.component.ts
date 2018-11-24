import { Component } from '@angular/core';

@Component({
  selector: 'lazy-load-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageTitle = 'Lazy Loading Modules';
  loading = true;
  title = 'ng-lazy-loading';
}
