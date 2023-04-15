import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  [x: string]: any;

  urlSite = "http://localhost:8080/site"

  constructor(
    private httpcl :HttpClient
  ) {


   }



  AjoutSite(userInfo:any){



   return  this.httpcl.post(this.urlSite+"/ajout", userInfo );

  }

  Affichsite()
  {
    return this.httpcl.get(this.urlSite+"/list");
  }




  ajouter(){
    return this.httpcl.post(this.urlSite, {Headers:localStorage.getItem('token')})
  }


}

