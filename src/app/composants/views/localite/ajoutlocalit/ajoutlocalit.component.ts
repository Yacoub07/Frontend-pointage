import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { LocaliteService } from '../localite.service';
import { ServicecommuneService } from '../loctype/commune/servicecommune.service';
import { ServicepaysService } from '../loctype/pays/servicepays.service';
import { ServicequartierService } from '../loctype/quartier/servicequartier.service';
import { ServiceregionService } from '../loctype/region/serviceregion.service';
import { ServicevilleService } from '../loctype/ville/serviceville.service';
import { PaysComponent } from '../loctype/pays/pays.component';

@Component({
  selector: 'app-ajoutlocalit',
  templateUrl: './ajoutlocalit.component.html',
  styleUrls: ['./ajoutlocalit.component.css']
})
export class AjoutlocalitComponent implements OnInit {
  public localiteForm!: FormGroup;
  public pays! : any;
  listepays: any;
  listeregion: any;
  listeville: any;
  listequartier: any;

  isSubmitted  =  false;



  constructor(private LocaliteService:LocaliteService,
    private router: Router,
    private formBuilder: FormBuilder,
    private payslocal:ServicepaysService,
    private quartierlocal:ServicequartierService,
    private regionlocal:ServiceregionService,
    private villelocal:ServicevilleService)
    {}

  ngOnInit(): void {
    this.gestpayservice();
    this.gestregionservice();
    this.gestvilleservice();
    this.gestquartierservice();


    this.localiteForm=this.formBuilder.group({


       //pays
       pays : ['',[Validators.required,Validators.minLength(8)]],

      //region
      region: ['',[Validators.required,Validators.minLength(4)]],


      //Ville
      ville: ['',[Validators.required,Validators.minLength(4)]],

      //quartier
      quartier: ['',[Validators.required,Validators.minLength(10)]],


    })

    var paysid={
      "id":this.localiteForm.value.pays
    }
    this.localiteForm.value.pays=paysid
    console.log(this.localiteForm.value)



    var regionid={
      "id":this.localiteForm.value.region
    }
    this.localiteForm.value.region=regionid

    console.log(this.localiteForm.value)


    var villeid={
      "id":this.localiteForm.value.ville
    }
    this.localiteForm.value.ville=villeid

    console.log(this.localiteForm.value)


    var quartierid={
      "id":this.localiteForm.value.quartier
    }
    this.localiteForm.value.quartier=quartierid





  }

  gestpayservice() {
    this.payslocal.Affichpays().subscribe({
      next:(data)=>{
        this.listepays=data
      }})
    }


    gestregionservice() {
      this.regionlocal.Affichregion().subscribe({
        next:(data)=>{
              this.listeregion=data
            }})}


    gestvilleservice() {
      this.villelocal.Affichville().subscribe({
        next:(data)=>{
              this.listeville=data
            }})
        }



    gestquartierservice() {
      this.quartierlocal.Affichquartier().subscribe({
            next:(data)=>{
              this.listequartier=data
            }})
        }



  get formControls() { return this.localiteForm.controls; }



  localiteFonction(){
    var serviceid={
      "id":this.localiteForm.value.service
    }
    this.localiteForm.value.service=serviceid
    console.log(this.localiteForm.value)
    this.LocaliteService.AjoutLocalite(this.localiteForm.value).subscribe({
      next:(data)=>{
console.log(data)
      },error:(erreur)=>{
        console.log(erreur)
      }

    })
}
}






