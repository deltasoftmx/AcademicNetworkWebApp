import { Component, OnInit } from '@angular/core';
import { Student, Career } from '../../classes/student.model';
import { AcademicNetworkService } from '../../../services/academic-network/academic-network.service'
import { Router } from '@angular/router';
import { NotificationsService } from '../../../services/notifications/notifications.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { passwordMatch, whiteSpaces } from './my-validations';
import { SessionService } from '../../../services/session/session.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  public student: Student;
  public userTypeId: number;
  public careers: Career;
  public expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    surnames: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.-]+@[a-zA-Z]+(\.[a-zA-Z]+|\.[a-zA-Z]+\.[a-zA-Z]+)$/, // Estructura de correo.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    career: /^[a-zA-ZÀ-ÿ\s\.]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  };
  public myForm: FormGroup;

  constructor(
    private academicNetworkService: AcademicNetworkService,
    private router: Router,
    private notifService: NotificationsService,
    private fb: FormBuilder,
    private sessionService: SessionService,
    public location: Location
  ) {}

  ngOnInit(): void {
    this.academicNetworkService.getCareers().subscribe(d => {

      if(d.code == 0) {
        this.careers = d.data.majors;
        console.log(this.careers);
      } else {
        console.log('something gone wrong')
        console.log(d)
      }

    });

    this.academicNetworkService.getUserTypes().subscribe(userTypes => {
      if(userTypes.code == 0)  {
        this.userTypeId = userTypes.data.user_types[0].id;
        console.log(this.userTypeId);
      }
    });

    this.buildForm();

  }

  //Métodos.

  /*
    Método que contiene todos los campos del formulario,
    además, tiene validaciones para que la información que
    se envie sea la correcta.
  */
  private buildForm() {
    this.myForm = this.fb.group(
      {
        firstname: [
          '',
          [
            Validators.required,
            Validators.pattern(this.expressions.name),
            whiteSpaces,
          ],
        ],
        lastname: [
          '',
          [
            Validators.required,
            Validators.pattern(this.expressions.surnames),
            whiteSpaces,
          ],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(this.expressions.email),
            whiteSpaces,
          ],
        ],
        passwd: [
          '',
          [
            Validators.required,
            Validators.pattern(this.expressions.password),
            whiteSpaces,
          ],
        ],
        password2: [
          '',
          [
            Validators.required,
            Validators.pattern(this.expressions.password),
            whiteSpaces,
          ],
        ],
        description: ['', [Validators.minLength(0), Validators.maxLength(500)]],
        user_type_id: [1],
        major_id: [
          '', Validators.required,
        ]
      },
      {
        validators: passwordMatch,
      }
    );
  }

  // Errores para el formulario.
  getError(controlName: string): boolean {
    const control = this.myForm.get(controlName);
    return (control.touched || control.dirty) && control.errors != null;
  }

  getError2(controlName: string): boolean {
    const control = this.myForm.get(controlName);
    return control.errors != null;
  }

  getErrorPassword2(): boolean {
    return this.myForm.hasError('passwordMismatch');
  }
  // Fin errores para el formulario.

  // Método que se ejecuta si el formulario  es correcto.
  onSubmit(event) {
    event.preventDefault();

    if(this.myForm.valid) {
      this.student = this.myForm.value;
      delete this.student.password2;

      //Agrega al nuevo estudiante.
      this.academicNetworkService.addNewStudent(this.student).subscribe(data => {
        if(this.showMessage(data) == 0) {
          // Guarda el token del registro en el session storage.
          this.sessionService.saveToken(data.data.session_token);
          this.sessionService.set_userdata('username', data.data.username);
          this.sessionService.set_userdata('firstname', data.data.firstname);
          this.sessionService.set_userdata('lastname', data.data.lastname);
          this.sessionService.set_userdata('profile_img_src', data.data.profile_img_src);

          setTimeout(() => {
            this.router.navigate(['/user-feed']);
          }, 1000);
        }
      });
    }
  }

  //Regresa al inicio de sesión.
  goBack() {
    this.location.back();
  }

  /*
    Muestra mensajes al usuario dependiendo del
    código de error recibido en la petición para agregar
    a un nuevo estudiante.
  */
  showMessage(data: any) {
    switch(data.code) {
      case 1:
      this.notifService.error('Código de error: 1', 'Nombre de dominio no permitido');
      break;

      case 2:
      this.notifService.error('Código de error: 2', 'El correo ya existe');
      break;

      case 3:
      this.notifService.error('Código de error: 3', 'El nombre de usuario ya existe');
      break;

      case 4:
      this.notifService.error('Código de error: 4', 'El tipo de usuario no existe');
      break;

      case 5:
      this.notifService.error('Código de error: 5', 'La carrera no existe');
      break;

      case 0:
        this.notifService.success('Correcto', 'Has sido registrado correctamente');
        return 0;
    }
  }

}
