
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BriNavbarComponent } from './shared/components/layout/bri-navbar/bri-navbar.component';

@NgModule({
  declarations: [
    AppComponent
    , BriNavbarComponent
  ],
  imports: [
    BrowserModule
    , AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
