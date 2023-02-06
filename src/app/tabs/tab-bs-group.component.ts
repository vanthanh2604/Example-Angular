import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TabGroupComponent } from './tab-group.component';

@Component({
  selector: 'tab-bs-group',
  template: `
    <ul class="nav nav-tabs my-4 mx-4">
      <li class="nav-item" *ngFor="let tab of tabPanelList; let idx = index">
        <a class="nav-link" [class.active]="idx === activeIndex" aria-current="page" (click)="activeIndexChange.emit(idx)">
        {{tab.title}}
        <button (click)="removeTab(tab)">x</button>
        </a>
      </li>
    </ul>

    <ng-container *ngIf="tabPanelList.length;else defaultTemplate">
      <ng-container *ngTemplateOutlet="tabPanelList[activeIndex].panelBody"></ng-container>
    </ng-container>
    <ng-template #defaultTemplate>
        no tabs
    </ng-template>
  `,
  providers: [
    {
      provide: TabGroupComponent,
      useExisting: TabBsGroupComponent,
    },
  ],
})
export class TabBsGroupComponent extends TabGroupComponent {}
