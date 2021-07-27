import { Component, OnInit } from '@angular/core';
import { ElementCard } from '../../classes/student.model';
import { SessionService } from 'src/app/services/session/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.css']
})
export class MyGroupsComponent implements OnInit {

  public defaultIcon: string = '/assets/people-black-18dp.svg';
  public myGroups: ElementCard[];

  constructor(
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit(): void {
    if(!this.session.get_userdata()) {
      this.router.navigateByUrl('/login');
    }

    //Simulando que estos son los grupos
    //a los que está inscrito el estudiante.
    //Pienso en traer estos datos desde la API.
    this.myGroups = [
      {
        icon: 'https://rietveld-ict.nl/wp-content/uploads/2014/01/users.png',
        text: [{text: 'Nombre del grupo', style: 'h2'}],
        internalLink: null,
        externalLink: null
      },

      {
        icon: 'https://juliocsantaman.com/assets/img/juliocsantaman.jpg',
        text: [{text: 'Nombre del grupo', style: 'h2'}],
        internalLink: null,
        externalLink: null
      },

      {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png',
        text: [{text: 'Nombre del grupo', style: 'h2'}],
        internalLink: null,
        externalLink: null
      },

      {
        icon: 'https://avatars1.githubusercontent.com/u/33400166?s=96&v=4',
        text: [{text: 'Nombre del grupo', style: 'h2'}],
        internalLink: null,
        externalLink: null
      },

      {
        icon: 'https://avatars3.githubusercontent.com/u/67294504?s=96&v=4',
        text: [{text: 'Nombre del grupo', style: 'h2'}],
        internalLink: null,
        externalLink: null
      },

      {
        icon: 'https://avatars2.githubusercontent.com/u/52019284?s=96&v=4',
        text: [{text: 'Nombre del grupo', style: 'h2'}],
        internalLink: null,
        externalLink: null
      },

      {
        icon: '',
        text: [{text: 'Nombre del grupo', style: 'h2'}],
        internalLink: null,
        externalLink: null
      },

      {
        icon: '',
        text: [{text: 'Nombre del grupo', style: 'h2'}],
        internalLink: null,
        externalLink: null
      },

       {
        icon: '',
        text: [{text: 'Nombre del grupo', style: 'h2'}],
        internalLink: null,
        externalLink: null
      },

      {
        icon: '',
        text: [{text: 'Nombre del grupo', style: 'h2'}],
        internalLink: null,
        externalLink: null
      }
    ];
  }

}
