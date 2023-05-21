import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public loginWithPasswordAndUsername(username:string,password:string){
    const url = environment.baseUrl+'login/';
    console.log(url);
    const body = {
      "username":username,
      "password":password
    }
    return lastValueFrom (this.http.post(url,body));
  }
}
