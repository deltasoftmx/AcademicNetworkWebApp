import { Component, OnInit, Input } from '@angular/core';
import { ElementCard } from '../../interfaces/student.model';

@Component({
  selector: 'app-element-card',
  templateUrl: './element-card.component.html',
  styleUrls: ['./element-card.component.css']
})
export class ElementCardComponent implements OnInit {
  
  @Input() defaultIcon: string;
  @Input() card: ElementCard;

  constructor() { }

  ngOnInit(): void {
  }

}
