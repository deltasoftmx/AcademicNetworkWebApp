import { Component, OnInit } from '@angular/core';
import { ElementCard } from '../../interfaces/student.model';

@Component({
  selector: 'app-available-groups',
  templateUrl: './available-groups.component.html',
  styleUrls: ['./available-groups.component.css']
})
export class AvailableGroupsComponent implements OnInit {

  public defaultIcon: string = 'supervised_user_circle';
  public availableGroups: ElementCard[];

  constructor() { }

  ngOnInit(): void {
    //Simulando que estos son los grupos disponibles.
    //Pienso en traer estos datos desde la API.
    this.availableGroups = [
      {
        icon: 'https://rietveld-ict.nl/wp-content/uploads/2014/01/users.png',
        text: [{text: 'Nombre del grupo', style: 'h2'}]
      },
  
      {
        icon: 'https://juliocsantaman.com/assets/img/juliocsantaman.jpg',
        text: [{text: 'Nombre del grupo', style: 'h2'}]
      },
  
      {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png',
        text: [{text: 'Nombre del grupo', style: 'h2'}]
      },
  
      {
        icon: 'https://avatars1.githubusercontent.com/u/33400166?s=96&v=4',
        text: [{text: 'Nombre del grupo', style: 'h2'}]
      },
  
      {
        icon: 'https://avatars3.githubusercontent.com/u/67294504?s=96&v=4',
        text: [{text: 'Nombre del grupo', style: 'h2'}]
      },
  
      {
        icon: 'https://avatars2.githubusercontent.com/u/52019284?s=96&v=4',
        text: [{text: 'Nombre del grupo', style: 'h2'}]
      },
  
      {
        icon: '',
        text: [{text: 'Nombre del grupo', style: 'h2'}]
      },
  
      {
        icon: '',
        text: [{text: 'Nombre del grupo', style: 'h2'}]
      },

       {
        icon: '',
        text: [{text: 'Nombre del grupo', style: 'h2'}]
      },
  
      {
        icon: '',
        text: [{text: 'Nombre del grupo', style: 'h2'}]
      }
    ];
  }
}
