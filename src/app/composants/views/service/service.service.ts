import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  [x: string]: any;

  urlService = "http://localhost:8080/service"
  constructor(
    private httpcl :HttpClient
  ) {}



  AjoutService(serviceInfo:any){



   return  this.httpcl.post(this.urlService+"/ajout", serviceInfo );

  }


  Affichservice()
  {
    return this.httpcl.get(this.urlService+"/list");
  }



  ajouter(){
    return this.httpcl.post(this.urlService, {Headers:localStorage.getItem('token')})
  }


}
