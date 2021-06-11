import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../interfaces/publication.model'

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {

  @Input() comments: Array<Comment>;
  @Output() moreComments: EventEmitter<any> = new EventEmitter();
  @Output() newComment: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handlerForSeeMoreComments() {
    this.moreComments.emit()
  }

  adjustTextOfComment(text) {
    let splitedByLines = text.split('\n')
    for (let j = 0; j < splitedByLines.length; j++) {
      if(splitedByLines[j] == '') {
        splitedByLines.splice(j, 1);
        j -= 1;
      }
    }
    
    return splitedByLines;
  }

  handlerForNewComment(event) {
    this.newComment.emit(event)
  }

}
