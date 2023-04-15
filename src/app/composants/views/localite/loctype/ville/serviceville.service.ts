import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicevilleService {
  [x: string]: any;

  urlVille = "http://localhost:8080/ville"

  constructor(
    private httpcl :HttpClient
  ) {


   }

   AjoutVille(Villeinfo:any){



   return  this.httpcl.post(this.urlVille+"/ajout", Villeinfo );

  }

  Affichville()
  {
    return this.httpcl.get(this.urlVille+"/list");
  }



  ajouter(){
    return this.httpcl.post(this.urlVille, {Headers:localStorage.getItem('token')})
  }


}
