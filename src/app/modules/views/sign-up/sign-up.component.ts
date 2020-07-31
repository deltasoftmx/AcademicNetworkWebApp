import { Component, OnInit } from '@angular/core';
import { Student, Career } from '../../interfaces/student.model';
import { SignUpService } from '../../../services/sign-up.service';
import { Router } from '@angular/router';
import { NotificationsService } from '../../../services/notifications.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { passwordMatch, whiteSpaces } from './my-validations';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  public student: Student;
  public careers: Career[];
  public expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
    surnames: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.-]+@[a-zA-Z]+\.[a-zA-Z]+$/, // Estructura de correo.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    career: /^[a-zA-ZÀ-ÿ\s\.]{1,40}$/, // Letras y espacios, pueden llevar acentos.,
  };
  public myForm: FormGroup;

  constructor(
    private signUpService: SignUpService,
    private router: Router,
    private notifService: NotificationsService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.careers = this.signUpService.getCareers();
    this.student = this.signUpService.newStudent();
    this.buildForm();
  }

  //Métodos.
  private buildForm() {
    this.myForm = this.fb.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.pattern(this.expressions.name),
            whiteSpaces,
          ],
        ],
        surnames: [
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
        password: [
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
        career: [
          '',
          [Validators.required, Validators.pattern(this.expressions.career)],
        ],
        description: ['', [Validators.minLength(0), Validators.maxLength(250)]],
      },
      {
        validators: passwordMatch,
      }
    );
  }

  getError(controlName: string): boolean {
    const control = this.myForm.get(controlName);
    return control.touched && control.errors != null;
  }

  getError2(controlName: string): boolean {
    const control = this.myForm.get(controlName);
    return control.errors != null;
  }

  getErrorPassword(): boolean {
    return this.myForm.hasError('passwordMismatch');
  }

  onSubmit(event) {
    event.preventDefault();

    if (event.explicitOriginalTarget.textContent == 'Volver') {
      this.goBack();
      return;
    }

    this.student = this.myForm.value;
    console.log(this.student);

    //Agrega al nuevo estudiante (simulado :v).
    this.signUpService.addNewStudent(this.student);
    this.student = this.signUpService.newStudent();

    this.notifService.success('Correcto', 'Has sido registrado correctamente');
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
  }

  //Regresa al inicio de sesión.
  goBack() {
    this.router.navigate(['/login']);
  }
}
