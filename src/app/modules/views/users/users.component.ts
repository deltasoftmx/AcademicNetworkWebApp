import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: Object[];

  constructor() { }

  ngOnInit(): void {

    //Simulando que estos son los usuarios 
    //a los que está inscrito el estudiante.
    //Pienso en traer estos datos desde la API.
    this.users = [
      {
        icon: 'account_circle',
        name: 'Nombre',
        surnames: 'Apellidos'
      },
  
      {
        icon: 'account_circle',
        name: 'Nombre',
        surnames: 'Apellidos'
      },
  
      {
        icon: 'account_circle',
        name: 'Nombre',
        surnames: 'Apellidos'
      },
  
      {
        icon: 'account_circle',
        name: 'Nombre',
        surnames: 'Apellidos'
      },
  
      {
        icon: 'account_circle',
        name: 'Nombre',
        surnames: 'Apellidos'
      },
  
      {
        icon: 'account_circle',
        name: 'Nombre',
        surnames: 'Apellidos'
      },
  
      {
        icon: 'account_circle',
        name: 'Nombre',
        surnames: 'Apellidos'
      },
  
      {
        icon: 'account_circle',
        name: 'Nombre',
        surnames: 'Apellidos'
      },
  
      {
        icon: 'account_circle',
        name: 'Nombre',
        surnames: 'Apellidos'
      },
  
      {
        icon: 'account_circle',
        name: 'Nombre',
        surnames: 'Apellidos'
      }
    ];
  }

}
