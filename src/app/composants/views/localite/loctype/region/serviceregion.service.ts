import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceregionService {
  [x: string]: any;

  urlRegion = "http://localhost:8080/region"

  constructor(
    private httpcl :HttpClient
  ) {


   }

   AjoutRegion(Regioninfo:any){



   return  this.httpcl.post(this.urlRegion+"/ajout", Regioninfo );

  }

  Affichregion()
  {
    return this.httpcl.get(this.urlRegion+"/list");
  }



  ajouter(){
    return this.httpcl.post(this.urlRegion, {Headers:localStorage.getItem('token')})
  }


}
