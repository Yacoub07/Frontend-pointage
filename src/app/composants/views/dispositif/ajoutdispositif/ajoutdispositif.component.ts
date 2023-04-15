import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { DispositifService } from '../dispositif.service';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-ajoutdispositif',
  templateUrl: './ajoutdispositif.component.html',
  styleUrls: ['./ajoutdispositif.component.css']
})
export class AjoutdispositifComponent {
  public dispositForm!: FormGroup;
  listeservices:any;
  alert:boolean=false

  isSubmitted  =  false;
  listedispositif: any;


  constructor(private dispositifservice:DispositifService,
    private router: Router,
    private formBuilder: FormBuilder,
    private Servicempl : ServiceService)
    {}
  ngOnInit(): void {
    this.getservice();
    this.dispositForm=this.formBuilder.group({
      nom: ['',[Validators.required,Validators.minLength(4)]],
      identifiant: ['',[Validators.required,Validators.minLength(4)]],
      ip_dispo: ['',[Validators.required,Validators.minLength(4)]],
      port: ['',[Validators.required,Validators.minLength(4)]],
      nom_service: ['',[Validators.required,Validators.minLength(4)]],

    })
  }


  get formControls() { return this.dispositForm.controls; }



  dispositifFonction(){
    var serviceid={
      "id":this.dispositForm.value.service
    }
    this.dispositForm.value.service=serviceid
    console.log(this.dispositForm.value)
    this.dispositifservice.AjoutDispositif(this.dispositForm.value).subscribe({
      next:(data)=>{
console.log(data)
      },error:(erreur)=>{
        console.log(erreur)
      }

    })

//message d'erreur
this.alert=true
this.listedispositif.reset({})

    }

    fermalert ()
    {
      this.alert=false

    }

    getservice()
    {
      this.Servicempl.Affichservice().subscribe({
        next:(data)=>{
          this.listeservices=data
    }})}
}

