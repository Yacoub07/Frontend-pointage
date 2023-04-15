import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { ServicecommuneService } from '../servicecommune.service';

@Component({
  selector: 'app-ajoutcommune',
  templateUrl: './ajoutcommune.component.html',
  styleUrls: ['./ajoutcommune.component.css']
})
export class AjoutcommuneComponent implements OnInit {
  public communeForm!: FormGroup;


  isSubmitted  =  false;


  constructor(private servicecommuneService:ServicecommuneService,
    private router: Router,
    private formBuilder: FormBuilder)
    {}
  ngOnInit(): void {
    this.communeForm=this.formBuilder.group({
      nom: ['',[Validators.required,Validators.minLength(4)]],
      longitude: ['',[Validators.required,Validators.minLength(4)]],
      latitude: ['',[Validators.required,Validators.minLength(4)]],


    })
  }


  get formControls() { return this.communeForm.controls; }



  communeFonction(){
    console.log(this.communeForm.value)
    this.servicecommuneService.AjoutCommune(this.communeForm.value).subscribe({
      next:(data)=>{
console.log(data)
      },error:(erreur)=>{
        console.log(erreur)
      }
    })



    }

}
