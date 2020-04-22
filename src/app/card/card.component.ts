import {Component, OnInit, Input} from '@angular/core';
import {Card} from '../app.component'
import { from } from 'rxjs';
@Component({
    selector:'app-card',
    templateUrl:'./card.component.html',
    styleUrls:['./card.component.css']
})
export class CardComponent implements OnInit {
    @Input() card: Card
    @Input() index: number
    title ="Card Title"
    text = "It is My first interpolation"

    cardDate: Date = new Date()

    textColor:string

     ngOnInit(){
     
    }
    changeTitle(){
        this.card.title = 'Hello Event'
    }
 
}