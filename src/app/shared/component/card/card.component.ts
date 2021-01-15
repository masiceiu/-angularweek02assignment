import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  constructor() {
   this.card = {
      title: 'Fake-Title',
      count: 3,
      frequent: 'frequent',
      body: 'There will be minimum 3 assignment for html-css so that we can be good in html-css coding.',
    };
  }

  ngOnInit(): void {
  }

}
