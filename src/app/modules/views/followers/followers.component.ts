import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  public followers: Object[];

  constructor() { }

  ngOnInit(): void {
    //Simulando que estos son los seguidores 
    //a los que está inscrito el estudiante.
    //Pienso traer estos datos desde la API.
    this.followers = [
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
