import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RubriqueserviceService {
  [x:string]: any;
  urlEmploye ="http://localhost:8080/employe"
  urlService ="http://localhost:8080/service"
  urlSite ="http://localhost:8080/site"

  constructor(
    private httpcl :HttpClient
  )
  {}


  Affichcountliste(){
    return this.httpcl.get(this.urlEmploye+"/count");
  }




  Affichcountempl()
  {
    return this.httpcl.get(this.urlEmploye+"/count");
  }


  Affichcountservice()
  {
    return this.httpcl.get(this.urlService+"/count");
  }


  Affichcountsite()
  {
    return this.httpcl.get(this.urlSite+"/count");
  }

  ajouter(){
    return this.httpcl.post(this.urlEmploye, {Headers:localStorage.getItem('token')})
  }


}
