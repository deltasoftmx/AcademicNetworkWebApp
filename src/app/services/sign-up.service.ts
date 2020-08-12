import { Injectable } from '@angular/core';
import { Student } from '../modules/interfaces/student.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apikey, domain} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  public headers = new HttpHeaders({
    'x-api-key': apikey,
    'Content-Type': 'application/json'
  });

  constructor(
    private http: HttpClient,
    ) { 
  }

  //Métodos.
  getCareers(): Observable<any> {
    return this.http.get(`${domain}/v1/api/social-network/users/majors`, {headers: this.headers});
  }
  
  addNewStudent(student: Student) {
    return this.http.post(`${domain}/v1/api/social-network/users/signup`, student, {headers: this.headers});
  }

  getUserTypes(): Observable<any> {
    return this.http.get(`${domain}/v1/api/social-network/users/types`, {headers: this.headers});
  }
  
} 
