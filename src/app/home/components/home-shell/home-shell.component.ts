import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lazy-load-home-shell',
  templateUrl: './home-shell.component.html',
  styleUrls: ['./home-shell.component.scss']
})
export class HomeShellComponent implements OnInit {
  categories = [];
  constructor() { }

  ngOnInit() {
    this.categories = [{
      title: 'Front-end development',
      desc: 'Front-end web development is the practice of converting data to graphical interface for user to view and interact with data through digital interaction using HTML, CSS and JavaScript.',
      router: '/front-end'
    }, {
      title: 'Back-end development',
      desc: 'An app or a web service can have two broad parts: the frontend and the backend. The backend is the part that you can’t “see”. It is the internal working of the application or website. This includes stuff like the server, the database, etc.',
      router: '/back-end'
    }];
  }

}
