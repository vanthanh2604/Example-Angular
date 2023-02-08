import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TabPanelComponent } from './tabs/tab-panel.component';
import { TabGroupComponent } from './tabs/tab-group.component';
import { TabBsGroupComponent } from './tabs/tab-bs-group.component';
import { CounterComponent } from './counter/counter.component';
import { TabContentDirective } from './tabs/tab-content.directive';
import { HeadComponent } from './head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    TabPanelComponent,
    TabGroupComponent,
    TabBsGroupComponent,
    CounterComponent,
    TabContentDirective,
    HeadComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
