import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AjoutFonction } from '../service/ajoutservice/service';

@Injectable({
  providedIn: 'root'
})
export class DispositifService {

  [x: string]: any;

  urlDispositif = "http://localhost:8080/dispositif"

  constructor(
    private httpcl :HttpClient
  ) {


   }

  AjoutDispositif(dispositifinfo:any){



   return  this.httpcl.post(this.urlDispositif+"/ajout", dispositifinfo );

  }


  Affichdispositif()
  {
    return this.httpcl.get(this.urlDispositif+"/list");
  }




  ajouter(){
    return this.httpcl.post(this.urlDispositif, {Headers:localStorage.getItem('token')})
  }


}
