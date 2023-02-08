import {
  Component,
  ContentChild,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { TabContentDirective } from '../tabs/tab-content.directive';

let i = 1;
@Component({
  selector: 'app-head',
  template: `
  <h1>day la head {{i}}</h1>
  `,
})
export class HeadComponent {
  i = i++;
  ngOnInit() {}
}
