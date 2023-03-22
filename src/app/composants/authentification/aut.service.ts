import { Injectable } from '@angular/core';
import { User } from './login/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutService {




  url = "http://localhost:8080/api/authenticate"
  constructor(
    private httpcl :HttpClient
  ) { }


  login(userInfo:any){

   return  this.httpcl.post(this.url, userInfo, {responseType:"text"});

  }



  ajouer(){
    return this.httpcl.post(this.url, {Headers:localStorage.getItem('token')})
  }
}
