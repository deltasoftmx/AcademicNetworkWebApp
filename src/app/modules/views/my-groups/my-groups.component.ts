import { Component, OnInit } from '@angular/core';
import { ElementCard } from '../../classes/student.model';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.css']
})
export class MyGroupsComponent implements OnInit {

  public defaultIcon: string = '/assets/people-black-18dp.svg';
  public myGroups: ElementCard[];

  constructor() { }

  ngOnInit(): void {

    //Simulando que estos son los grupos
    //a los que está inscrito el estudiante.
    //Pienso en traer estos datos desde la API.
    this.myGroups = [
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
