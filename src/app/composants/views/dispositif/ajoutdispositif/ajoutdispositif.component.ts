import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { DispositifService } from '../dispositif.service';
import { ServiceService } from '../../service/service.service';
import { SiteService } from '../../sites/site.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajoutdispositif',
  templateUrl: './ajoutdispositif.component.html',
  styleUrls: ['./ajoutdispositif.component.css']
})
export class AjoutdispositifComponent {
  public dispositForm!: FormGroup;
  listesite:any;

  public messagerreur!: string;

  isSubmitted  =  false;
  listedispositif: any;


  constructor(private dispositifservice:DispositifService,
    private router: Router,
    private formBuilder: FormBuilder,
    private Sitempl:SiteService,
    private toastr : ToastrService,
    )
    {}
  ngOnInit(): void {
    this.getsite();
    this.dispositForm=this.formBuilder.group({
      nom: ['',[Validators.required,Validators.minLength(4)]],
      identifiant: ['',[Validators.required,Validators.minLength(4)]],
      ip_dispo: ['',[Validators.required,Validators.minLength(4)]],
      port: ['',[Validators.required,Validators.minLength(4)]],
      site: ['',[Validators.required,Validators.minLength(4)]],
    })
  }


  getsite() {
    this.Sitempl.Affichsite().subscribe({
      next:(data)=>{
        this.listesite=data
  }})
  }


  get formControls() { return this.dispositForm.controls; }



  dispositifFonction(){
    var siteid={
      "id":this.dispositForm.value.site
    }
    this.dispositForm.value.site=siteid
    console.log(this.dispositForm.value)
    this.dispositifservice.AjoutDispositif(this.dispositForm.value).subscribe({
      next:(data)=>{
console.log(data)
this.dispositForm.reset()
this.toastr.success("ajouter avec succèss");
this.router.navigate(["accueildispositif"])

      },

      error:(erreur)=>{
        console.log(erreur)
        this.toastr.error("Erreur d'ajoute");

      }


    })



    }




}

