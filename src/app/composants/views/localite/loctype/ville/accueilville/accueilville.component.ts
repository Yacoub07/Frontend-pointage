import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { ServicevilleService } from '../serviceville.service';

@Component({
  selector: 'app-accueilville',
  templateUrl: './accueilville.component.html',
  styleUrls: ['./accueilville.component.css']
})
export class AccueilvilleComponent implements OnInit {
  public listvilles!: any;


  isSubmitted  =  false;


  constructor(private servicevilleService:ServicevilleService,
    private router: Router,
    private formBuilder: FormBuilder)
    {}
  ngOnInit(): void {
    this.listville();
  }

  listville(){
    this.servicevilleService. Affichville().subscribe({
      next:(data)=>{
        this.listvilles=data
      },error:(erreur)=>{
        console.log(erreur)
      }
    })



    }

}

