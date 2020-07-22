import { Component, OnInit } from '@angular/core';
import { ElementCard } from '../../interfaces/student.model';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.css']
})
export class MyGroupsComponent implements OnInit {

  public defaultIcon: string = 'supervised_user_circle';
  public myGroups: ElementCard[];

  constructor() { }

  ngOnInit(): void {

    //Simulando que estos son los grupos 
    //a los que está inscrito el estudiante.
    //Pienso en traer estos datos desde la API.
    this.myGroups = [
      {
        icon: 'https://rietveld-ict.nl/wp-content/uploads/2014/01/users.png',
        text: 'Nombre Apellidos'
      },
  
      {
        icon: 'https://juliocsantaman.com/assets/img/juliocsantaman.jpg',
        text: 'Nombre Apellidos'
      },
  
      {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png',
        text: 'Nombre Apellidos'
      },
  
      {
        icon: 'https://avatars1.githubusercontent.com/u/33400166?s=96&v=4',
        text: 'Nombre Apellidos'
      },
  
      {
        icon: 'https://avatars3.githubusercontent.com/u/67294504?s=96&v=4',
        text: 'Nombre Apellidos'
      },
  
      {
        icon: 'https://avatars2.githubusercontent.com/u/52019284?s=96&v=4',
        text: 'Nombre Apellidos'
      },
  
      {
        icon: '',
        text: 'Nombre del grupo'
      },
  
      {
        icon: '',
        text: 'Nombre del grupo'
      },
  
      {
        icon: '',
        text: 'Nombre del grupo'
      },
  
      {
        icon: '',
        text: 'Nombre del grupo'
      }
    ];
  }

}
