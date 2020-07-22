import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  public following: Object[];

  constructor() { }

  ngOnInit(): void {
    //Simulando que estos son los seguidos 
    //a los que está inscrito el estudiante.
    //Pienso traer estos datos desde la API.
    this.following = [
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
