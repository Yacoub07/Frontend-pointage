import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { ServicequartierService } from '../servicequartier.service';

@Component({
  selector: 'app-ajoutquartier',
  templateUrl: './ajoutquartier.component.html',
  styleUrls: ['./ajoutquartier.component.css']
})
export class AjoutquartierComponent implements OnInit {
  public quartierForm!: FormGroup;


  isSubmitted  =  false;


  constructor(private servicequartierService:ServicequartierService,
    private router: Router,
    private formBuilder: FormBuilder)
    {}
  ngOnInit(): void {
    this.quartierForm=this.formBuilder.group({
      nom: ['',[Validators.required,Validators.minLength(4)]],
      longitude: ['',[Validators.required,Validators.minLength(4)]],
      latitude: ['',[Validators.required,Validators.minLength(4)]],


    })
  }


  get formControls() { return this.quartierForm.controls; }



  quartierFonction(){
    console.log(this.quartierForm.value)
    this.servicequartierService.AjoutQuartier(this.quartierForm.value).subscribe({
      next:(data)=>{
console.log(data)
      },error:(erreur)=>{
        console.log(erreur)
      }
    })



    }

}
