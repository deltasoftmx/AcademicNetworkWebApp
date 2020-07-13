import { Injectable } from '@angular/core';
import { Student, Career } from '../modules/interfaces/student.model';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  public students: Student[];
  public careers: Career[];

  constructor() { 
    this.careers = 
    [
      {
        id: 0,
        name: 'Ingeniería en Desarrollo de Software'
      },

      {
        id: 1,
        name: 'Licenciatura en Administración'
      },

      {
        id: 2,
        name: 'Licenciatura en Diseño Gráfico'
      },

      {
        id: 3,
        name: 'Licenciatura en Nutrición'
      },

      {
        id: 4,
        name: 'Licenciatura en Negocios Internacionales'
      }
    ];

    this.students = [];
  }

  //Métodos.
  getCareers(): Career[] {
    return this.careers;
  }

  getStudents(): Student[] {
    return this.students;
  }

  newStudent(): Student {
    return {
      id: this.students.length,
      name: '',
      surnames: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      career: '',
      description: ''
    }
  }

  addNewStudent(student: Student) {
    this.students.push(student);
  }
}
