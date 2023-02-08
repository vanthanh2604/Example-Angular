import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter = 1;
  currentIndex = 0;
  navs = ['Active', 'Link 1', 'Link 2'];
}
