import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor( private httpclient : HttpClient) { }

  private apiUrl = 'http://localhost:3000/auth';

  login(email:string, password:string){
    return this.httpclient.post(`${this.apiUrl}/login`,{email,password})
  }
  logout():Observable<any>{
    return this.httpclient.post(`${this.apiUrl}/logout`,{});
  }
}
