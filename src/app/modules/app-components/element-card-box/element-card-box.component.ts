import { Component, OnInit, Input } from '@angular/core';
import { ElementCard } from '../../interfaces/student.model';

@Component({
  selector: 'app-element-card-box',
  templateUrl: './element-card-box.component.html',
  styleUrls: ['./element-card-box.component.css']
})
export class ElementCardBoxComponent implements OnInit {

  @Input() defaultIcon: string;
  @Input() data: ElementCard[];

  constructor() { }

  ngOnInit(): void {
  }

}
