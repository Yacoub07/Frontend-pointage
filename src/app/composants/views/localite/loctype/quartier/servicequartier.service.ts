import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicequartierService {
  [x: string]: any;

  urlQuartier = "http://localhost:8080/quartier"

  constructor(
    private httpcl :HttpClient
  ) {


   }

   AjoutQuartier(quartierinfo:any){



   return  this.httpcl.post(this.urlQuartier+"/ajout", quartierinfo );

  }

  Affichquartier()
  {
    return this.httpcl.get(this.urlQuartier+"/list");
  }



  ajouter(){
    return this.httpcl.post(this.urlQuartier, {Headers:localStorage.getItem('token')})
  }


}
