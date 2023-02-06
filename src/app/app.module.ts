import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TabComponent } from './tab.component';
import { TabPanelComponent } from './tabs/tab-panel.component';
import { TabGroupComponent } from './tabs/tab-group.component';
import { TabBsGroupComponent } from './tabs/tab-bs-group.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabPanelComponent,
    TabGroupComponent,
    TabBsGroupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
