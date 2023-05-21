import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import  { FormsModule } from '@angular/forms'; 
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  username: string = '';
  password: string = '';
  token:any=""
  ngOnInit(): void {}

  constructor(private router:Router, private http:HttpClient, private auth:AuthService){

  }

  async login() {
   
    try{
    let resp:any = await this.auth.loginWithPasswordAndUsername(this.username,this.password)
    console.log(resp)
    localStorage.setItem('token', resp['token']);
    this.username="";
    this.password="";
    //redirect
    this.router.navigateByUrl('/todos')
    }catch(e){
      console.error(e)
    }
  }

  
   
}
