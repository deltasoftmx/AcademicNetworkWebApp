import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.css']
})
export class MyGroupsComponent implements OnInit {

  public myGroups: Object[];

  constructor() { }

  ngOnInit(): void {

    //Simulando que estos son los grupos 
    //a los que está inscrito el estudiante.
    //Pienso en traer estos datos desde la API.
    this.myGroups = [
      {
        icon: 'supervised_user_circle',
        name: 'Grupo de programación'
      },
  
      {
        icon: 'supervised_user_circle',
        name: 'Grupo de inglés'
      },
  
      {
        icon: 'supervised_user_circle',
        name: 'Grupo secreto'
      },
  
      {
        icon: 'supervised_user_circle',
        name: 'Nombre del grupo'
      },
  
      {
        icon: 'supervised_user_circle',
        name: 'Nombre del grupo'
      },
  
      {
        icon: 'supervised_user_circle',
        name: 'Nombre del grupo'
      },
  
      {
        icon: 'supervised_user_circle',
        name: 'Nombre del grupo'
      },
  
      {
        icon: 'supervised_user_circle',
        name: 'Nombre del grupo'
      },
  
      {
        icon: 'supervised_user_circlet',
        name: 'Nombre del grupo'
      },
  
      {
        icon: 'supervised_user_circle',
        name: 'Nombre del grupo'
      }
    ];
  }

}
