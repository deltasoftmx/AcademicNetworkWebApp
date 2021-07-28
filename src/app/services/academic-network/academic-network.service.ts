import { Injectable } from '@angular/core';
import { Student } from '../../modules/classes/student.model';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { apikey, domain} from '../../../environments/environment';
import * as ans from '../../modules/classes/academic-network.model';
import { SessionService } from '../session/session.service';
import { Publication } from 'src/app/modules/classes/publication.model';

@Injectable({
  providedIn: 'root'
})
export class AcademicNetworkService {

  constructor(
    private http: HttpClient,
    private session: SessionService
  ) { }

  private handleError<T>(operation) {

    return (error: HttpErrorResponse): Observable<T> => {

      if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
        // TODO: better job of transforming error for user consumption
        console.log(
          `${operation} failed: ${error.message}`);
      }

      // Let the app keep running by returning an empty result.
      return of(error.error as T);
      // Return an observable with a user-facing error message.

      //return throwError(
      //  'Something bad happened; please try again later.');
    };

  }

  //Métodos.
  getCareers(): Observable<any> {
    let headers = new HttpHeaders({
      'x-api-key': apikey,
      'Content-Type': 'application/json'
    });

    return this.http.get(
      `${domain}/v1/api/social-network/users/majors`,
      { headers: headers })
        .pipe(catchError(
          this.handleError<any>('Get Careers')));
  }

  addNewStudent(student: Student) {
    let headers = new HttpHeaders({
      'x-api-key': apikey,
      'Content-Type': 'application/json'
    });

    return this.http.post(
      `${domain}/v1/api/social-network/users/signup`,
      student,
      { headers: headers })
        .pipe(catchError(
          this.handleError<any>('Add New Student')));
  }

  getUserTypes(): Observable<any> {
    let headers = new HttpHeaders({
      'x-api-key': apikey,
      'Content-Type': 'application/json'
    });

    return this.http.get(
      `${domain}/v1/api/social-network/users/types`,
      { headers: headers })
        .pipe(catchError(
          this.handleError<any>('Get User Types')));
  }

  getUserPublicData(username): Observable<ans.Response<ans.UserPublicData>> {
    let headers = new HttpHeaders({
      'x-api-key': apikey,
      'Content-Type': 'application/json'
    });

    return this.http.get<ans.Response<ans.UserPublicData>>(
      `${domain}/v1/api/social-network/users/data/${username}`,
      { headers: headers })
        .pipe(catchError(
          this.handleError<ans.Response<ans.UserPublicData>>('Get User Public Data')));
  }

  signin(username, passwd): Observable<ans.Response<ans.SigninData>> {
    let headers = new HttpHeaders({
      'x-api-key': apikey,
      'Content-Type': 'application/json'
    });

    let user = {
      username,
      passwd
    };

    return this.http.post<ans.Response<ans.SigninData>>(
      `${domain}/v1/api/social-network/users/signin`,
      user,
      { headers: headers })
        .pipe(catchError(
          this.handleError<ans.Response<ans.SigninData>>('Signin')));
  }

  getUserTimeline(offset: number = 20, page: number = 0): Observable<ans.Response<ans.UserTimeline>> {
    let headers = new HttpHeaders({
      'x-api-key': apikey,
      'Content-Type': 'application/json',
      'Authorization': this.session.getToken()
    });

    let params = new HttpParams()
      .set('offset', offset.toString())
      .set('page', page.toString());

    return this.http.get<ans.Response<ans.UserTimeline>>(
      `${domain}/v1/api/social-network/posts/timeline`,
      { headers: headers, params: params })
        .pipe(catchError(
          this.handleError<ans.Response<ans.UserTimeline>>('Get User User Timeline')));
  }

  getGroupInformation(groupId): Observable<ans.Response<ans.GroupInformation>> {
    let headers = new HttpHeaders({
      'x-api-key': apikey,
      'Content-Type': 'application/json',
      'Authorization': this.session.getToken()
    });

    return this.http.get<ans.Response<ans.GroupInformation>>(
      `${domain}/v1/api/social-network/groups/group/${groupId}/information`,
      { headers: headers })
        .pipe(catchError(
          this.handleError<ans.Response<ans.GroupInformation>>('Get Group Information')));
  }

  getPost(postId): Observable<ans.Response<Publication>> {
    let headers = new HttpHeaders({
      'x-api-key': apikey,
      'Content-Type': 'application/json',
      'Authorization': this.session.getToken()
    });

    return this.http.get<ans.Response<Publication>>(
      `${domain}/v1/api/social-network/posts/post/${postId}`,
      { headers: headers })
        .pipe(catchError(
          this.handleError<ans.Response<Publication>>('Get Post')));
  }

  getCommentsOfPost(postId, offset = 20, page = 0): Observable<ans.Response<ans.CommentsOfPost>> {
    let headers = new HttpHeaders({
      'x-api-key': apikey,
      'Content-Type': 'application/json',
      'Authorization': this.session.getToken()
    });

    let params = new HttpParams()
      .set('offset', offset.toString())
      .set('page', page.toString());

    return this.http.get<ans.Response<ans.CommentsOfPost>>(
      `${domain}/v1/api/social-network/posts/post/${postId}/comments`,
      { headers: headers, params: params })
        .pipe(catchError(
          this.handleError<ans.Response<ans.CommentsOfPost>>('Get Comments of Post')));
  }

}
