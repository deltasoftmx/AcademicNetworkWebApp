import { Component, OnInit } from '@angular/core';
import { Student, Career } from '../../interfaces/student.model';
import { SignUpService } from '../../../services/sign-up.service';
import { Router } from '@angular/router';
import { NotificationsService } from '../../../services/notifications.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public student: Student;
  public careers: Career[];

  constructor(
    private signUpService: SignUpService, 
    private router: Router,
    private notifService: NotificationsService
    ) { }

  ngOnInit(): void {
    this.careers = this.signUpService.getCareers();
    this.student = this.signUpService.newStudent();
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
          this.notifService.error('Error', 'No puedes dejar en blanco los campos con *');
          return;
        }
      }
      
      //Agrega al nuevo estudiante (simulado :v).
      this.signUpService.addNewStudent(this.student);
      console.log(this.signUpService.getStudents());
      this.student = this.signUpService.newStudent();
  
      this.notifService.success('Correcto', 'Has sido registrado correctamente');
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1000);

    } else if(event.explicitOriginalTarget.textContent == 'Volver') {
      this.goBack();
    }
  }

  //Se quitan los espacios en blanco
  //de izquierda a derecha para validarlos.
  removeWhiteSpace(str) {
    let newValue = str.toString().trim();
    return newValue;
  }

   //Regresa al inicio de sesión.
   goBack() {
    this.router.navigate(['/login']);
  }
}
