import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StringFormatService } from '../../../services/string-format.service'

@Component({
  selector: 'app-publication-card',
  templateUrl: './publication-card.component.html',
  styleUrls: ['./publication-card.component.css']
})
export class PublicationCardComponent implements OnInit {

  @Input() profileImgSrc:string;
  @Input() profileName:string = '';
  @Input() publicationImgSrc:string;
  @Input() text:string;
  @Input() subtitle:string;
  @Output('action') eventManager: EventEmitter<any> = new EventEmitter();
  public altProfileImg = 'Ávatar de ' + this.profileName;
  public altPublicationImg = 'Publicación de ' + this.profileName;

  constructor(public stringFormat: StringFormatService) { }

  ngOnInit(): void {
    console.log(this.stringFormat.splitByEOL(this.text))
  }

  eventHandler(eventName) {
    this.eventManager.emit({
      name: eventName
    })
  }

}
