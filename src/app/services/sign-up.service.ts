import { Injectable } from '@angular/core';
import { Student, Career } from '../modules/interfaces/student.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { 
  }

  //Métodos.
  getCareers(): Observable<any> {
    let headers = new HttpHeaders({
      'x-api-key': 'df7033daa9692e8c37596d95834435e0435488bd68dd58c00b4cd7ce12629f11',
      'Content-Type': 'application/json'
    });

    return this.http.get('http://ec2-100-25-170-221.compute-1.amazonaws.com/v1/api/social-network/users/majors', {headers});
  }

  addNewStudent(student: Student) {
    let headers = new HttpHeaders({
      'x-api-key': 'df7033daa9692e8c37596d95834435e0435488bd68dd58c00b4cd7ce12629f11',
      'Content-Type': 'application/json'
    });
    

    return this.http.post('http://ec2-100-25-170-221.compute-1.amazonaws.com/v1/api/social-network/users/signup', student, {headers}).subscribe(data => {
      console.log(data);
    })
  }

  getUserTypes(): Observable<any> {
    let headers = new HttpHeaders({
      'x-api-key': 'df7033daa9692e8c37596d95834435e0435488bd68dd58c00b4cd7ce12629f11',
      'Content-Type': 'application/json'
    });

    return this.http.get('http://ec2-100-25-170-221.compute-1.amazonaws.com/v1/api/social-network/users/types', {headers});
  }
}
