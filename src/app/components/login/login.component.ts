import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import  { FormsModule } from '@angular/forms'; 
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  username: string = '';
  password: string = '';
  ngOnInit(): void {}

  constructor(private http:HttpClient, private auth:AuthService){

  }

  async login() {
   
    try{
    let resp = await this.auth.loginWithPasswordAndUsername(this.username,this.password)
    console.log(resp)
    this.username="";
    this.password="";
    //redirect
    }catch(e){
      console.error(e)
    }
  }

  
   
}
