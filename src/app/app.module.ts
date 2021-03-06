
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BriNavbarComponent } from './shared/components/layout/bri-navbar/bri-navbar.component';
import { BriTableComponent } from './shared/components/bri-table/bri-table.component';
import { BriSidebarComponent } from './shared/components/layout/bri-sidebar/bri-sidebar.component';

/**
 * @author: Shoukath Mohammed
 */
@NgModule({
  declarations: [
    AppComponent
    , BriNavbarComponent
    , BriSidebarComponent
  ],
  imports: [
    BrowserModule
    , AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
