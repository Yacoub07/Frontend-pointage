import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjoutuserService {
  [x: string]: any;

  urlEmploye = "http://localhost:8080/employe"
  urlAdminEwaati = "http://localhost:8080/ewaati"
  constructor(
    private httpcl :HttpClient
  ) { }
   token = JSON.stringify(localStorage.getItem('token'));
   headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer'+this.token
  });
   requestOptions = { headers: this.headers };
  AjoutEmploye(userInfo:any){

    console.log(this.token);


   return  this.httpcl.post(this.urlEmploye+"/ajout", userInfo, this.requestOptions);

  }

  AjoutAdminEwaati(userInfo:any){

    return  this.httpcl.post(this.urlAdminEwaati+"/ajout", userInfo, {responseType:"text"});

   }



  ajouter(){
    return this.httpcl.post(this.urlEmploye, {Headers:localStorage.getItem('token')})
  }


}
