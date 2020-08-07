import { Injectable } from '@angular/core';
import { Student } from '../modules/interfaces/student.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from './session.service'; 

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  public headers = new HttpHeaders({
    'x-api-key': 'df7033daa9692e8c37596d95834435e0435488bd68dd58c00b4cd7ce12629f11',
    'Content-Type': 'application/json'
  });

  constructor(
    private http: HttpClient,
    private sessionService: SessionService
    ) { 
  }

  //Métodos.
  getCareers(): Observable<any> {
    return this.http.get('http://ec2-100-25-170-221.compute-1.amazonaws.com/v1/api/social-network/users/majors', {headers: this.headers});
  }

  addNewStudent(student: Student) {
    return this.http.post('http://ec2-100-25-170-221.compute-1.amazonaws.com/v1/api/social-network/users/signup', student, {headers: this.headers}).subscribe(data => {
      // Guarda el token del registro en el session storage.
      this.sessionService.saveToken("session_token", data);
    });

  }

  getUserTypes(): Observable<any> {
    return this.http.get('http://ec2-100-25-170-221.compute-1.amazonaws.com/v1/api/social-network/users/types', {headers: this.headers});
  }
  
} 
