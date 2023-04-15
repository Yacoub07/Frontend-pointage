import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicepaysService {
  [x: string]: any;

  urlPays = "http://localhost:8080/pays"

  constructor(
    private httpcl :HttpClient
  ) {


   }

   AjoutPays(paysinfo:any){



   return  this.httpcl.post(this.urlPays+"/ajout", paysinfo );

  }

  Affichpays()
  {
    return this.httpcl.get(this.urlPays+"/list");
  }



  ajouter(){
    return this.httpcl.post(this.urlPays, {Headers:localStorage.getItem('token')})
  }


}
