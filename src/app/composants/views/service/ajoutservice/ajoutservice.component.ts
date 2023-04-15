import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-ajoutservice',
  templateUrl: './ajoutservice.component.html',
  styleUrls: ['./ajoutservice.component.css']
})
export class AjoutserviceComponent {
  public serviceForm!: FormGroup;


  isSubmitted  =  false;




  constructor(private serviceservice: ServiceService,
    private router: Router,
    private formBuilder: FormBuilder)
    {}
  ngOnInit(): void {
    this.serviceForm=this.formBuilder.group({
      code: ['',[Validators.required,Validators.minLength(4)]],
      nom_service: ['',[Validators.required,Validators.minLength(4)]],


    })
  }


  get formControls() { return this.serviceForm.controls; }



  serviceService(){
    console.log(this.serviceForm.value)
    this.serviceservice.AjoutService(this.serviceForm.value).subscribe({
      next:(data)=>{
console.log(data)
      },error:(erreur)=>{
        console.log(erreur)
      }
    })



    }

}
