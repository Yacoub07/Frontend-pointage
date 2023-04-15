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


   AjoutLocalite(fonctionInfo:any){



    return  this.httpcl.post(this.urlLocalite+"/ajout", fonctionInfo );

   }


   Affichfonction()
   {
     return this.httpcl.get(this.urlLocalite+"/list");
   }



   ajouter(){
     return this.httpcl.post(this.urlLocalite, {Headers:localStorage.getItem('token')})
   }


 }
