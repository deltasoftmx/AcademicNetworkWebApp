import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Publication, Comment } from '../../classes/publication.model';
import { AcademicNetworkService } from 'src/app/services/academic-network/academic-network.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  public postId:number;
  public publication: Publication = new Publication();
  public comments: Comment[] = [];
  public focusInput: number = 1;
  public size: number = 20;
  public page: number = 0;

  constructor(
    private route: ActivatedRoute,
    private academicNetwork: AcademicNetworkService,
    private notification: NotificationsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = Number(params['id']);
      this.setPublication();
      this.setComments();
    })
    //Call de AcademyNetwork API to retrieve the post.

    //And other call to get their comments.

    //Assign the retrieved values to the local variables to display the content.
  }

  handerForNewComment(event) {
    this.comments.push({
      user_id: 111,
      post_id: 22,
      firstname: 'Cheems',
      lastname: 'Balltze',
      username: 'cheems',
      profile_image_src: 'https://holatelcel.com/wp-content/uploads/2020/09/cheems-memes-9.jpg',
      content: event.text,
      image_src: '',
      created_at: '2021/06/20'
    })
  }

  handlerForMoreComments(event) {
    console.log('more comments')
    this.setComments();
  }

  favoriteEventHandler(event) {
    console.log(event)
  }

  shareEventHandler(event) {
    console.log(event)
  }

  commentEventHandler(event) {
    this.focusInput = Math.random();
  }

  setPublication() {
    this.academicNetwork.getPost(this.postId)
      .subscribe(res => {
        if(res.code == 0) {
          this.publication = res.data;
        } else if(res.code == 1) {
          this.notification.error(
            'No autenticado',
            'Lo sentimo. Debes iniciar sesión para ver esta publicación.');
        } else if(res.code == 2) {
          this.notification.error(
            'No autorizado',
            'Lo sentimos. Esta publicación es de un grupo privado del que no eres parte. :c');
        } else if(res.code == 3) {
          this.notification.error(
            'No encontrado',
            'Lo sentimos. La publicación que solicitas no existe. :c');
        }
      })
  }

  setComments() {
    this.academicNetwork.getCommentsOfPost(
      this.postId,
      this.size,
      this.page)
        .subscribe(res => {
          if(res.code == 0) {
            this.comments = this.comments.concat(res.data.comments);
            this.page++;
            console.log(this.comments)
            if(!res.data.comments.length) {
              //all comments gotten
              this.page--;
              alert('ya son todos');
            }
          }
        })
  }

}
