import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publication } from '../../classes/publication.model';
import { SessionService } from 'src/app/services/session/session.service';
import { AcademicNetworkService } from 'src/app/services/academic-network/academic-network.service';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {

  public publications: Publication[] = [];
  public voidTimeline: boolean;

  constructor(
    public router: Router,
    private session: SessionService,
    private academicNetwork: AcademicNetworkService
  ) { }

  ngOnInit(): void {
    if(!this.session.get_userdata()) {
      this.router.navigateByUrl('/login');
    }
    //Call the timeline api.
    this.academicNetwork.getUserTimeline()
      .subscribe(res => {
        if(res.code == 0) {
          this.publications = res.data.posts;
          if(res.data.total_records == 0) {
            this.voidTimeline = true;
          } else {
            this.voidTimeline = false;
          }
        }
      })
  }

  newPublicationHandler(event) {
    console.log(event);
  }

  favoriteEventHandler(event) {
    console.log(event)
  }

  commentEventHandler(event) {
    console.log(event)
    this.router.navigateByUrl(`/post/${event.publicationId}`)
  }

  shareEventHandler(event) {
    console.log(event)
  }

}
