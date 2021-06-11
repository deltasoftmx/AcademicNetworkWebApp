import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../interfaces/publication.model'
import { StringFormatService } from '../../../services/string-format.service'

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {

  @Input() comments: Array<Comment>;
  @Output() moreComments: EventEmitter<any> = new EventEmitter();
  @Output() newComment: EventEmitter<any> = new EventEmitter();

  constructor(public stringFormat: StringFormatService) { }

  ngOnInit(): void {
  }

  handlerForSeeMoreComments() {
    this.moreComments.emit()
  }

  adjustTextOfComment(text) {
    return this.stringFormat.splitByEOL(text)
  }

  handlerForNewComment(event) {
    this.newComment.emit(event)
  }

}
