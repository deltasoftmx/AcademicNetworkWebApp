import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Academy Network'; //Título del toolbar.

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
}
