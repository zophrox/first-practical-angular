import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CardComponent} from './card/card.component';
import{CardTwoComponent} from './card2/card2.component'
@NgModule({
  declarations: [
    AppComponent, CardComponent, CardTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
