import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private session: SessionService,
  ) { }

  ngOnInit(): void {
  }

  catch_user(user_form_data) {
    //Las siguientes líneas son un ejemplo y deben ser cambiadas por
    //la lógica correspondiente para iniciar sesión.
    //Recordar modularizar el código (separar en funciones).
    console.log(user_form_data);
    
    this.showPasswordForm(user_form_data);

    this.session.set_userdata('username', user_form_data.value);

    
  }

  //Muestra un formulario para que
  //el usuario pueda ingresar su contraseña
  //si el input del username no está vacío. 
  showPasswordForm(user_form_data) {
    if(user_form_data.value != '') {
      const usernameForm = document.getElementById('get-username');
      const passwordForm = document.getElementById('get-password');
      
      usernameForm.style.display = 'none';
      passwordForm.style.display = 'inline-block';
    }
  }

}
