import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { ServiceService } from '../service.service';
import { SiteService } from '../../sites/site.service';

@Component({
  selector: 'app-ajoutservice',
  templateUrl: './ajoutservice.component.html',
  styleUrls: ['./ajoutservice.component.css']
})
export class AjoutserviceComponent {
  public serviceForm!: FormGroup;
  listesite:any


  isSubmitted  =  false;




  constructor(private serviceservice: ServiceService,
    private router: Router,
    private formBuilder: FormBuilder,
    private sitempl: SiteService
    )
    {}
  ngOnInit(): void {
    this.getsite();
    this.serviceForm=this.formBuilder.group({
      code: ['',[Validators.required,Validators.minLength(4)]],
      nom_service: ['',[Validators.required,Validators.minLength(4)]],
      site: ['',[Validators.required,Validators.minLength(4)]],


    })
  }
  getsite() {
    this.sitempl.Affichsite().subscribe({
      next:(data)=>{
        this.listesite=data
  }
  })
  }


  get formControls() { return this.serviceForm.controls; }



  serviceService(){
    var siteid={
      "id":this.serviceForm.value.site
    }
    this.serviceForm.value.site=siteid


    console.log(this.serviceForm.value)
    this.serviceservice.AjoutService(this.serviceForm.value).subscribe({
      next:(data)=>{
console.log(data)
this.serviceForm.reset()
      },error:(erreur)=>{
        console.log(erreur)
      }
    })



    }

}
