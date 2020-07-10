import { Component, OnInit } from '@angular/core';
import { Student, Career } from '../../interfaces/student.model';
import { SignUpService } from '../../../services/sign-up.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public student: Student;
  public careers: Career[];

  constructor(private signUpService: SignUpService, private router: Router) { 
    this.careers = signUpService.getCareers();
    this.student = signUpService.newStudent();
  }

  ngOnInit(): void {
  }

  //Métodos.
  onClick(event) {
    event.preventDefault();

    if(event.explicitOriginalTarget.textContent == 'Registrarse' || event.explicitOriginalTarget.textContent == '') {

      for(let propertie in this.student) {
        
        let value = this.removeWhiteSpace(this.student[propertie]);

        //Si algun campo que no sea descripción está vacío
        //se le manda un mensaje de error.
        if(propertie != 'description' && value === '') {
          //Muestra una alerta de error al usuario.
          //Descripción de las propiedades del objeto como parámetro:
          //1. icon = agrega un icono (success, error, warning, info y question)
          //2. title = título de la alerta.
          //3. text = descripción del mensaje/alerta.
          //4. footer = footer de la alerta.
          swal.fire({
            icon: 'error',
            title: '<strong> Error </strong>',
            text: 'No puedes dejar en blanco los campos con *'
          });
          return;
        }
      }
      
      //Agrega al nuevo estudiante (simulado :v).
      this.signUpService.addNewStudent(this.student);
      console.log(this.signUpService.getStudents());
      this.student = this.signUpService.newStudent();
  
      this.successMsg();

    } else if(event.explicitOriginalTarget.textContent == 'Volver') {
      this.goBack();
    }

  }


  //Mostrando mensaje que el registro
  //ha sido éxitoso.
  successMsg() {
    swal.fire({
      icon: 'success',
      title: '<strong> Correcto </strong>',
      text: 'Has sido registrado correctamente'
    });
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
  }

  //Se quitan los espacios en blanco
  //para validarlos.
  removeWhiteSpace(str) {
    let value = str.toString();
    let newValue = value.replace(/ /g, '');
    return newValue;
  }

   //Regresa al inicio de sesión.
   goBack() {
    this.router.navigate(['/login']);
  }
 
  

}
