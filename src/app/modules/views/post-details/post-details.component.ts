import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Publication, Comment } from '../../interfaces/publication.model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  public postId:number;
  public publication: Publication;
  public comments: Array<Comment> = [];
  public focusInput: number = 1;


  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.postId);
    //Call de AcademyNetwork API to retrieve the post.
    
    //And other call to get their comments.

    //Assign the retrieved values to the local variables to display the content.
    this.publication = {
      id: 1111,
      username: 'cheems',
      firstname: 'Cheems',
      lastname: 'Balltze',
      profile_image_src: 'https://holatelcel.com/wp-content/uploads/2020/09/cheems-memes-9.jpg',
      content: 'Me da amsiedad escribir descipciones feik uwu',
      img_src: 'http://holatelcel.com/wp-content/uploads/2020/09/cheems-memes-8.jpg',
      referenced_post_id: null,
      post_type: 'user',
      like_counter: 700,
      created_at: '2020/06/03',
      liked_by_user: null,
      referenced_post: null,
    }
  }

  handerForNewComment(event) {
    this.comments.push({
      user_id: 111,
      post_id: 22,
      firstname: 'Cheems',
      lastname: 'Balltze',
      profile_image_src: 'https://holatelcel.com/wp-content/uploads/2020/09/cheems-memes-9.jpg',
      content: event.text,
      image_src: '',
      created_at: '2021/06/20'
    })
  }

  handlerForMoreComments(event) {
    console.log('more comments')
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

}
