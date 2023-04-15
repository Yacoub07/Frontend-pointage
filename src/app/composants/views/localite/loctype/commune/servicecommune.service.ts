import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicecommuneService {
  [x: string]: any;

  urlCommune = "http://localhost:8080/commune"
  urlAdminEwaati = "http://localhost:8080/ewaati"

  constructor(
    private httpcl :HttpClient
  ) {


   }

   AjoutCommune(Communeinfo:any){



   return  this.httpcl.post(this.urlCommune+"/ajout", Communeinfo );

  }

  affichCommune(){return this.httpcl.get(this.urlCommune+"/list");}


  AjoutAdminEwaati(){ return  this.httpcl.post(this.urlAdminEwaati+"/ajout", {responseType:"json"});

   }




  ajouter(){
    return this.httpcl.post(this.urlCommune, {Headers:localStorage.getItem('token')})
  }


}
