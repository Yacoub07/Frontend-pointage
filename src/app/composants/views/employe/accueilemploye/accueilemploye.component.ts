import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { EmployeService } from '../employe.service';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-accueilemploye',
  templateUrl: './accueilemploye.component.html',
  styleUrls: ['./accueilemploye.component.css']
})
export class AccueilemployeComponent implements OnInit {
  public listemployes!:any;


  isSubmitted  =  false;


  constructor(private employeService: EmployeService,
    private router: Router,
    private formBuilder: FormBuilder,
    )
    {}
  ngOnInit(): void {
    this.listemploye();
  }
  listemploye(){
    this.employeService.Affichemploye().subscribe({
      next:(data)=>{
      this.listemployes=data

      },error:(erreur)=>{
        console.log(erreur)
      }
    })
    }
}




