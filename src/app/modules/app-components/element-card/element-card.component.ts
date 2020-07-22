import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-element-card',
  templateUrl: './element-card.component.html',
  styleUrls: ['./element-card.component.css']
})
export class ElementCardComponent implements OnInit {

  
  @Input() icon: string;
  @Input() name: string;
  @Input() surnames: string;

  constructor() { }

  ngOnInit(): void {
  }

}
