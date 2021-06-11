import { Component, OnInit } from '@angular/core';
import { Comment } from '../../interfaces/publication.model';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {

  //Temporal
  public comments: Array<Comment> = [
    {
      user_id: 1032,
      post_id: 5033,
      firstname: "Alexis",
      lastname: "Montejo Lopez",
      content: "Hello, World!",
      profile_image_src: "https://avatars1.githubusercontent.com/u/33400166?s=96&v=4",
      image_src: "",
      created_at: "01/03/2021"
    },
    {
      user_id: 1032,
      post_id: 5033,
      firstname: "Alexis",
      lastname: "Montejo Lopez",
      content: "Second test. Hello, World!",
      profile_image_src: "https://avatars1.githubusercontent.com/u/33400166?s=96&v=4",
      image_src: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      created_at: "01/03/2021"
    },
    {
      user_id: 1032,
      post_id: 5033,
      firstname: "Alexis",
      lastname: "Montejo Lopez",
      content: "Another comment to test",
      profile_image_src: "https://avatars1.githubusercontent.com/u/33400166?s=96&v=4",
      image_src: "",
      created_at: "01/03/2021"
    },
    {
      user_id: 1032,
      post_id: 5033,
      firstname: "Alexis",
      lastname: "Montejo Lopez",
      content: "I think I like front end. xd\n\nhelloooo",
      profile_image_src: "https://avatars1.githubusercontent.com/u/33400166?s=96&v=4",
      image_src: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      created_at: "01/03/2021"
    }
  ]

  constructor() { }

  ngOnInit(): void {
    console.log('comments at user-feed')
    console.log(this.comments)
  }

  handlerForActionOnPublication(event, pubId) {
    console.log(event)
    console.log(pubId)
  }

  handlerForSeeMoreComments() {
    console.log('more comments')
  }

  handlerForNewComments(event) {
    console.log(event)

    this.comments.push({
      user_id: 2000,
      post_id: 909090,
      firstname: 'Cheems',
      lastname: 'Balltze',
      content: event.text,
      profile_image_src: 'https://holatelcel.com/wp-content/uploads/2020/09/cheems-memes-9.jpg',
      image_src: 'https://www.eluniversal.com.mx/sites/default/files/2020/06/02/mejores-memes-cheems-perrito-muestra-antes-ahora_.jpg',
      created_at: '00/00/0000'
    })

    //console.log('inserted comments at user-feed')
    //console.log(this.comments)
  }

}
