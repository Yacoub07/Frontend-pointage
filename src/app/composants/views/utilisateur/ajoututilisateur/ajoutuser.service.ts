import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjoutuserService {
  [x: string]: any;

  urlEmploye = "http://localhost:8080/employe/ajout"
  urlAdminEwaati = "http://localhost:8080/ewaati"
  constructor(
    private httpcl :HttpClient
  ) {


   }

  //  auth_token = localStorage.getItem('token');
  //   headers = new HttpHeaders({
  //      'Content-Type': 'application/json',
  //      'responseType':'json',
  //      'Authorization': `Bearer ${this.auth_token?.substring(10, this.auth_token.length-2)}`
  //    });

  //   requestOptions = { headers: this.headers };

  AjoutEmploye(userInfo:any){



   return  this.httpcl.post(this.urlEmploye, userInfo );

  }

  AjoutAdminEwaati(userInfo:any){

    return  this.httpcl.post(this.urlAdminEwaati+"/ajout", userInfo, {responseType:"text"});

   }



  ajouter(){
    return this.httpcl.post(this.urlEmploye, {Headers:localStorage.getItem('token')})
  }


}
