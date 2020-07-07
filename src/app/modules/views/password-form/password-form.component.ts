import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent implements OnInit {

  constructor(private session: SessionService) { }

  ngOnInit(): void {
  }

  catch_user(user_form_data) {
    //Las siguientes líneas son un ejemplo y deben ser cambiadas por
    //la lógica correspondiente para iniciar sesión.
    //Recordar modularizar el código (separar en funciones).
    console.log(user_form_data)
    this.session.set_userdata('username', user_form_data.value)
  }

}
