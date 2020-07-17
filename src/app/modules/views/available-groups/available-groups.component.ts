import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-groups',
  templateUrl: './available-groups.component.html',
  styleUrls: ['./available-groups.component.css']
})
export class AvailableGroupsComponent implements OnInit {

  public availableGroups: Object[];

  constructor() { }

  ngOnInit(): void {
    //Simulando que estos son los grupos disponibles.
    //Pienso en traer estos datos desde la API.
    this.availableGroups = [
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
