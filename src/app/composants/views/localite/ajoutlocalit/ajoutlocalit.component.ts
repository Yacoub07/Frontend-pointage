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

  isSubmitted  =  false;
  gestpayservice: any;
  gestregionservice: any;
  gestvilleservice: any;
  gestquartierservice: any;
  listepays: any;

  constructor(private LocaliteService:LocaliteService,
    private router: Router,
    private formBuilder: FormBuilder,
    private servicepaysservice:ServicepaysService,
    private servicequartierservice:ServicequartierService,
    private serviceregionservice:ServiceregionService,
    private servicevilleservice:ServicevilleService)
    {}

  ngOnInit(): void {
    this.gestpayservice();
    this.gestregionservice();
    this.gestvilleservice();
    this.gestquartierservice();


    var paysid={
      "id":this.localiteForm.value.service
    }
    this.localiteForm.value.pays=paysid

    console.log(this.localiteForm.value)

    this.localiteForm=this.formBuilder.group({

      //localite
      id: ['',[Validators.required,Validators.minLength(4)]],

      //pays
      indicatif: ['',[Validators.required,Validators.minLength(4)]],

      //Ville
      NOM: ['',[Validators.required,Validators.minLength(4)]],

      //Region
      nom: ['',[Validators.required,Validators.minLength(10)]],

      //Quartier
      Nom: ['',[Validators.required,Validators.minLength(8)]],

    })
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


    this.gestpayservice()
    {

      this.servicepaysservice.Affichpays().subscribe({
        next:(data)=>{
          this.listepays=data
        }})

    }
}
}




