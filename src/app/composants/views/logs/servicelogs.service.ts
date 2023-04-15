import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicelogsService {
  [x: string]: any;

  urlDispositif = "http://localhost:8080/dispositif"

  constructor(
    private httpcl :HttpClient
  ) {


   }

  AjoutDispositif(dispositifinfo:any){



   return  this.httpcl.post(this.urlDispositif+"/ajout", dispositifinfo );

  }





  ajouter(){
    return this.httpcl.post(this.urlDispositif, {Headers:localStorage.getItem('token')})
  }


}
