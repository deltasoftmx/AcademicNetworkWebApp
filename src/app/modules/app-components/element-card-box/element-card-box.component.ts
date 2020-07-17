import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-element-card-box',
  templateUrl: './element-card-box.component.html',
  styleUrls: ['./element-card-box.component.css']
})
export class ElementCardBoxComponent implements OnInit {

  @Input() data: Object[];

  constructor() { }

  ngOnInit(): void {
  }

}
