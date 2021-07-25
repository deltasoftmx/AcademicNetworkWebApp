import { Component, OnInit } from '@angular/core';
import { ElementCard } from '../../classes/student.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public defaultIcon: string = '/assets/account_circle-black-18dp.svg';
  public users: ElementCard[];

  constructor() { }

  ngOnInit(): void {

    //Simulando que estos son los usuarios
    //a los que está inscrito el estudiante.
    //Pienso en traer estos datos desde la API.
    this.users = [
      {
        icon: 'https://rietveld-ict.nl/wp-content/uploads/2014/01/users.png',
        text: [{text: 'Nombre Apellidos', style: 'h2'}],
        internalLink: null,
        externalLink: null
      },

      {
        icon: 'https://juliocsantaman.com/assets/img/juliocsantaman.jpg',
        text: [{text: 'Nombre Apellidos', style: 'h2'}],
        internalLink: null,
        externalLink: null
      },

      {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png',
        text: [{text: 'Nombre Apellidos', style: 'h2'}],
        internalLink: null,
        externalLink: null
      },

      {
        icon: 'https://avatars1.githubusercontent.com/u/33400166?s=96&v=4',
        text: [{text: 'Nombre Apellidos', style: 'h2'}],
        internalLink: null,
        externalLink: null
      },

      {
        icon: 'https://avatars3.githubusercontent.com/u/67294504?s=96&v=4',
        text: [{text: 'Nombre Apellidos', style: 'h2'}],
        internalLink: null,
        externalLink: null
      },

      {
        icon: 'https://avatars2.githubusercontent.com/u/52019284?s=96&v=4',
        text: [{text: 'Nombre Apellidos', style: 'h2'}],
        internalLink: null,
        externalLink: null
      },

      {
        icon: '',
        text: [{text: 'Nombre Apellidos', style: 'h2'}],
        internalLink: null,
        externalLink: null
      },

      {
        icon: '',
        text: [{text: 'Nombre Apellidos', style: 'h2'}],
        internalLink: null,
        externalLink: null
      },

       {
        icon: '',
        text: [{text: 'Nombre Apellidos', style: 'h2'}],
        internalLink: null,
        externalLink: null
      },

      {
        icon: '',
        text: [{text: 'Nombre Apellidos', style: 'h2'}],
        internalLink: null,
        externalLink: null
      }
    ];
  }

  searchUsers(search) {
    console.log(search)
  }

}
