import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { ServicecommuneService } from '../servicecommune.service';

@Component({
  selector: 'app-accueilcommune',
  templateUrl: './accueilcommune.component.html',
  styleUrls: ['./accueilcommune.component.css']
})
export class AccueilcommuneComponent implements OnInit {
  public listcommunes: any;

  isSubmitted  =  false;

  constructor(private servicecommuneService:ServicecommuneService,
    private router: Router,
    private formBuilder: FormBuilder)
    {}
  ngOnInit(): void {
    this.listcommune();
  }

  listcommune(){
    this.servicecommuneService.affichCommune().subscribe({
      next:(data)=>{
        this.listcommunes=data
      },error:(erreur)=>{
        console.log(erreur)
      }
    })
    }
}
