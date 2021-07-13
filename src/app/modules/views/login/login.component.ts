import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private session: SessionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.set_form_visibility('passwd', 'hide');
    this.set_form_visibility('username', 'show');
  }

  //Si el usuario presiona el boton de registrar
  //lo manda al formulario correspondiente.
  showSignUp(user_form_data) {
    if(user_form_data.btn == 'left') {
      this.router.navigate(['/sign-up']);
    }
  }

  catch_user(user_form_data) {
    //Las siguientes líneas son un ejemplo y deben ser cambiadas por
    //la lógica correspondiente para iniciar sesión.
    //Recordar modularizar el código (separar en funciones).
    console.log(user_form_data);
    if(user_form_data.btn == 'right' || user_form_data.btn == 'return') {
      this.set_form_visibility('username', 'hide');
      this.set_form_visibility('passwd', 'show');
    }
  }

  //Muestra un formulario para que
  //el usuario pueda ingresar su contraseña
  //si el input del username no está vacío.
  catchPassword(user_form_data) {
    if(user_form_data.btn == 'left') {
      this.set_form_visibility('passwd', 'hide');
      this.set_form_visibility('username', 'show');
    }
    //Caso contrario, iniciar sesión y seguir a la vista del feed.
    //La siguiente línea es un ejemplo, no es un inicio de sesión real.
    this.session.set_userdata('username', user_form_data.value);
  }

  /**
   * Oculta o muestra los formularios.
   * @param form:string [username|passwd]
   * @param state:string [hide|show]
   */
  set_form_visibility(form, state) {

    let comp;

    if(form == 'username') {
      comp = document.querySelector('div.get-username');
    } else if(form == 'passwd') {
      comp = document.querySelector('div.get-password');
    }

    if(state == 'hide') {
      comp.classList.add('inactive');
    } else if(state == 'show') {
      comp.classList.remove('inactive');
    }
  }

}
