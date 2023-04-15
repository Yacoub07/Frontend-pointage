import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-accueilservice',
  templateUrl: './accueilservice.component.html',
  styleUrls: ['./accueilservice.component.css']
})
export class AccueilserviceComponent implements OnInit {
  public listfocntions!: any;


  isSubmitted  =  false;




  constructor(private serviceservice: ServiceService,
    private router: Router,
    private formBuilder: FormBuilder)
    {}
  ngOnInit(): void {
    this.listfonction();
  }

  listfonction(){
    this.serviceservice.Affichservice().subscribe({
      next:(data)=>{
        this.listfocntions=data
      },error:(erreur)=>{
        console.log(erreur)
      }
    })
    }
}
