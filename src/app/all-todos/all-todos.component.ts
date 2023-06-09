import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.scss']
})
export class AllTodosComponent implements OnInit{
  constructor(private http:HttpClient){

  }
todos:any=[]
async ngOnInit() {
  this.todos = await this.getTodolist();
  console.log(this.todos);

  
}

getTodolist(){
  const url = environment.baseUrl+'todos/';
  
  return lastValueFrom (this.http.get(url));
}
}

