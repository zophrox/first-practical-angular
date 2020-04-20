import {Component, OnInit} from '@angular/core';

@Component({
    selector:'app-card',
    templateUrl:'./card.component.html',
    styleUrls:['./card.component.css']
})
export class CardComponent implements OnInit {

    title ="Card Title"
    text = "It is My first interpolation"
    textColor:string
     ngOnInit(){
     
    }
    changeTitle(){
        this.title = 'Hello Event'
    }
 
}