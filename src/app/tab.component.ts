import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'tab',
  template: `
    <ul class="nav nav-tabs my-4 mx-4">
      <li class="nav-item" *ngFor="let item of navs">
        <a class="nav-link" aria-current="page" href="#">
          <ng-container *ngIf="linkTemplate;else defaultTemplate">
            <!-- cách 1 -->
            <!-- <ng-container [ngTemplateOutlet]="linkTemplate" [ngTemplateOutletContext]="{link: item}"> -->

            <!-- cách 2 -->
            <ng-container *ngTemplateOutlet="linkTemplate; context:{$implicit:item}"></ng-container>
          </ng-container>
          <ng-template #defaultTemplate>
              {{ item }}
          </ng-template>
        </a>
      </li>
    </ul>
  `,
})
export class TabComponent {
  @Input() navs: string[];
  @Input() linkTemplate: TemplateRef<any>;
}
