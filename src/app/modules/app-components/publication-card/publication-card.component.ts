import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StringFormatService } from '../../../services/string-format.service'

@Component({
  selector: 'app-publication-card',
  templateUrl: './publication-card.component.html',
  styleUrls: ['./publication-card.component.css']
})
export class PublicationCardComponent implements OnInit {

  @Input() postId: number;
  @Input() profileImgSrc:string;
  @Input() profileName:string = '';
  @Input() publicationImgSrc:string;
  @Input() text:string;
  @Input() subtitle:string;
  @Input() createdAt: string;
  @Input() likeCounter: number;
  @Input() liked: number;
  @Output() favorite: EventEmitter<any> = new EventEmitter();
  @Output() share: EventEmitter<any> = new EventEmitter();
  @Output() comment: EventEmitter<any> = new EventEmitter();
  public altProfileImg = 'Ávatar de ' + this.profileName;
  public altPublicationImg = 'Publicación de ' + this.profileName;

  constructor(public stringFormat: StringFormatService) { }

  ngOnInit(): void {
    console.log(this.stringFormat.splitByEOL(this.text))
  }

  favoriteEvent() {
    if(this.liked == null || this.liked == 0) {
      this.liked = 1;
      this.likeCounter++;
    } else {
      this.liked = 0;
      this.likeCounter--;
    }

    this.favorite.emit({
      favoriteStatus: this.liked
    })
  }

  shareEvent() {
    this.share.emit({
      publicationId: this.postId
    })
  }

  commentEvent() {
    this.comment.emit({
      publicationId: this.postId
    })
  }

}
