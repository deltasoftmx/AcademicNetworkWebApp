import { Component, OnInit } from '@angular/core';
import { SessionService } from './services/session/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Academic Network'; //Título del toolbar.

  constructor(
    public session: SessionService,
    private router: Router
  ) { }

  //Establece observadores en los eventos onready y onresize
  //para mantener el contenido de la app en la posición correcta.
  ngOnInit() {
    document.onreadystatechange = this.setSidenav
    window.onresize = this.setSidenav
  }

  //Establece la altura correcta para el contenido de la aplicación
  //la cual es jsuto después del toolbar.
  setSidenav() {
    let toolbar = document.getElementById('toolbar');
    let sidenav = document.getElementById('sidenav');
    sidenav.style.top = `${toolbar.offsetHeight}px`;
  }

  endSession() {
    this.session.end_session();
    this.router.navigate(['/']);
  }

  goMyProfile() {
    let userData = this.session.get_userdata()
    if(userData) {
      this.router.navigateByUrl(`/users/${userData.username}`);
    }
  }

  isThereSession() {
    return this.session.get_userdata() != null;
  }

  isThereUserImage() {
    let userData = this.session.get_userdata();
    if(!userData) {
      return false;
    }
    if(userData.profile_img_src) {
      return true;
    }
    return false;
  }

  get userImgSrc() {
    let userData = this.session.get_userdata();
    if(userData)
      return userData.profile_img_src || '';
  }
}
