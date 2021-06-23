import { Component, OnInit } from '@angular/core';
import { Publication } from '../../interfaces/publication.model';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {

  public publications: Array<Publication> = [];

  constructor() { }

  ngOnInit(): void {
    this.publications = [
      //
    ]
  }

  newPublicationHandler(event) {
    console.log(event);
  }

}
