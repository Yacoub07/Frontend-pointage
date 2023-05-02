import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { ServicevilleService } from '../serviceville.service';

@Component({
  selector: 'app-ajoutville',
  templateUrl: './ajoutville.component.html',
  styleUrls: ['./ajoutville.component.css']
})
export class AjoutvilleComponent implements OnInit {
  public villeForm!: FormGroup;


  isSubmitted  =  false;


  constructor(private servicevilleService:ServicevilleService,
    private router: Router,
    private formBuilder: FormBuilder)
    {}
  ngOnInit(): void {
    this.villeForm=this.formBuilder.group({
      nomVille: ['',[Validators.required,Validators.minLength(4)]],



    })
  }


  get formControls() { return this.villeForm.controls; }



  villeFonction(){
    console.log(this.villeForm.value)
    this.servicevilleService.AjoutVille(this.villeForm.value).subscribe({
      next:(data)=>{
console.log(data)
      },error:(erreur)=>{
        console.log(erreur)
      }
    })



    }

}

