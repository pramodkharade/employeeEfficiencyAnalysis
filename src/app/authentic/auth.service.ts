import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { environment} from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(public router: Router, public http:HttpClient) { }
  userLogin(username:string,password:string): Observable<any> {
   return this.http.post(environment.api+'/user/login',{ 'username': username, 'password': password });
  }
  userLogout(){
    localStorage.removeItem('Elogin');
    this.router.navigate(['/login']);
  }

}
