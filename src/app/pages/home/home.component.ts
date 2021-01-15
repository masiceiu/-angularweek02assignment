import {Component, OnInit} from '@angular/core';
import {CardGroup} from '../../shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cardGroupList: CardGroup[] = [];

  constructor() {
    this.cardGroupList = this.getCardGroupList();
  }

  ngOnInit(): void {

  }

  private getCardGroupList(): CardGroup[] {
    let allCardGroup: CardGroup[];
    allCardGroup = [
      {
        title: 'Angular',
        cards: [
          {
            title: 'Angular',
            count: 1,
            frequent: 'Week',
            body: 'We will have assignment per week for Angular. This assignment must be done before next week. Any help will be provide by Microsoft teams/class room.',
          },
          {
            title: 'JavaScript',
            count: 2,
            frequent: 'Week',
            body: 'There will be minimum 1 assignment for JavaScript so that we can be good in html-css coding.',
          },
          {
            title: 'HTML-CSS',
            count: 3,
            frequent: 'Monthly',
            body: 'There will be minimum 3 assignment for html-css so that we can be good in html-css coding.',
          }]
      },
      {
        title: 'Angular',
        cards: [
          {
            title: 'Angular',
            count: 1,
            frequent: 'Week',
            body: 'We will have assignment per week for Angular. This assignment must be done before next week. Any help will be provide by Microsoft teams/class room.',
          },
          {
            title: 'JavaScript',
            count: 2,
            frequent: 'Week',
            body: 'There will be minimum 1 assignment for JavaScript so that we can be good in html-css coding.',
          }, {
            title: 'HTML-CSS',
            count: 3,
            frequent: 'Monthly',
            body: 'There will be minimum 3 assignment for html-css so that we can be good in html-css coding.',
          }]
      }];
    return allCardGroup;
  }
}
