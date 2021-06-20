import { Component, OnInit } from '@angular/core';
import { Comment } from '../../interfaces/publication.model';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
