import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocaliteService {
  [x: string]: any;

  urlLocalite = "http://localhost:8080/Localite"
  urlAdminEwaati = "http://localhost:8080/ewaati"


  constructor(
   private httpcl :HttpClient
  ) {


   }


   AjoutLocalite(serviceInfo:any){



    return  this.httpcl.post(this.urlLocalite+"/ajout", serviceInfo );

   }


   Affichfonction()
   {
     return this.httpcl.get(this.urlLocalite+"/list");
   }



   ajouter(){
     return this.httpcl.post(this.urlLocalite, {Headers:localStorage.getItem('token')})
   }


 }
