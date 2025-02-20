import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JukeboxComponent } from './jukebox/jukebox.component';
import { MarqueeComponent } from './marquee/marquee.component';
import { Home2Component } from './home2/home2.component';
import { HeaderComponent } from './header/header.component';
import { MerchComponent } from './merch/merch.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JukeboxComponent,
    MarqueeComponent,
    Home2Component,
    HeaderComponent,
    MerchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
