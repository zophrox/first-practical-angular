import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/uk';

// the second parameter 'fr-FR' is optional
registerLocaleData(localeUk, 'uk')
export interface Card {
  title:string
  text:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  togle = true

  cards: Card[] =[
    {title:'card 1',text:'This is card number 1'},
    {title:'this is card 2',text:'This is card number 2'},
    {title:'last card',text:'This is card number 3'}
  ]

  togleCards(){
    this.togle = !this.togle
  }
}

