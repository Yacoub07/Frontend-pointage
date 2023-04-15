import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AjoutemplComponent } from './ajoutempl/ajoutempl.component';



@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  [x: string]: any;

  urlEmploye = "http://localhost:8080/employe"
  urlAdminEwaati = "http://localhost:8080/ewaati"


  constructor(
   private httpcl :HttpClient
  ) {


   }



  AjoutEmpl(userInfo:any, photo:File){
    let data = new FormData();
    data.append('file',photo)
    data.append('employe',JSON.stringify(userInfo))
   return  this.httpcl.post(this.urlEmploye+"/ajout", data, {responseType:"json" });
  }



  Affichemploye()
  {
    return this.httpcl.get(this.urlEmploye+"/liste");
  }

  AjoutAdminEwaati(userInfo:any, photo:File){
    let data = new FormData();
    data.append('file',photo)
    data.append('ewaati',JSON.stringify(userInfo))

    return  this.httpcl.post(this.urlAdminEwaati+"/ajout", data, {responseType:"json"});

   }




  ajouter(){
    return this.httpcl.post(this.urlEmploye, {Headers:localStorage.getItem('token')})
  }


}

