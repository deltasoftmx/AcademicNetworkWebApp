import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publication } from '../../classes/publication.model';
import { SessionService } from 'src/app/services/session/session.service';
import { AcademicNetworkService } from 'src/app/services/academic-network/academic-network.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { AnimationsService } from 'src/app/services/animations/animations.service';

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
    private academicNetwork: AcademicNetworkService,
    private notifications: NotificationsService,
    private animations: AnimationsService
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

  private makePost(postData) {
    this.animations.globalProgressBarActive = true;
    this.academicNetwork.createUserPost(postData)
      .subscribe(res => {
        console.log(res)
        this.animations.globalProgressBarActive = false;
        if(res.code == 0) {
          this.notifications.success(
            'Publicación creada',
            'Tu publicación se ha creado');
          this.publications.unshift(res.data);
        } else if(res.code == 1) {
          this.notifications.info(
            'Publicación vacía',
            'Debes escribir algo o agregar una imagen para publicar');
        } else if(res.code == 2) {
          this.notifications.info(
            'No se puede compartir',
            'La publicación pertenece a un grupo privado');
        }
      });
  }

  newPublicationHandler(event) {
    if(!event.text && !event.image) {
      this.notifications.info(
        'Publicación vacía',
        'Debes escribir algo o agregar una imagen para publicar');
      return;
    }

    let postData = {
      content: event.text,
      image: event.image
    };

    this.makePost(postData);
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
